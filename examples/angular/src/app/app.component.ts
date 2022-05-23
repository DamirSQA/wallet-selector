import { Component, OnInit } from "@angular/core";
import { setupWalletSelector } from "@near-wallet-selector/core";
import type { WalletSelector, AccountState } from "@near-wallet-selector/core";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupLedger } from "@near-wallet-selector/ledger";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";
import { setupModal } from "@near-wallet-selector/modal-ui";
import type { WalletSelectorModal } from "@near-wallet-selector/modal-ui";

declare global {
  interface Window {
    selector: WalletSelector;
    modal: WalletSelectorModal;
  }
}

@Component({
  selector: "near-wallet-selector-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  selector: WalletSelector;
  modal: WalletSelectorModal;
  accountId: string | null;
  accounts: Array<AccountState> = [];

  async ngOnInit() {
    await this.initialize();
  }

  syncAccountState(
    currentAccountId: string | null,
    newAccounts: Array<AccountState>
  ) {
    if (!newAccounts.length) {
      localStorage.removeItem("accountId");
      this.accountId = null;
      this.accounts = [];

      return;
    }

    const validAccountId =
      currentAccountId &&
      newAccounts.some((x) => x.accountId === currentAccountId);
    const newAccountId = validAccountId
      ? currentAccountId
      : newAccounts[0].accountId;

    localStorage.setItem("accountId", newAccountId);
    this.accountId = newAccountId;
    this.accounts = newAccounts;
  }

  async initialize() {
    setupWalletSelector({
      network: "testnet",
      contractId: "guest-book.testnet",
      debug: true,
      modules: [
        setupNearWallet(),
        setupSender(),
        setupLedger(),
        setupMathWallet(),
        setupWalletConnect({
          projectId: "d43d7d0e46eea5ee28e1f75e1131f984",
          metadata: {
            name: "NEAR Wallet Selector",
            description: "Example dApp used by NEAR Wallet Selector",
            url: "https://github.com/near/wallet-selector",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
        }),
      ],
    })
      .then((instance) => {
        const selectorModal = setupModal(instance);
        const state = instance.store.getState();

        this.syncAccountState(
          localStorage.getItem("accountId"),
          state.accounts
        );

        window.selector = instance;
        window.modal = selectorModal;
        this.selector = instance;
        this.modal = selectorModal;
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to initialise wallet selector");
      });
  }
}
