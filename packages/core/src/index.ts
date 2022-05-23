export type {
  WalletSelector,
  WalletSelectorParams,
  WalletSelectorEvents,
} from "./lib/wallet-selector.types";
export { setupWalletSelector } from "./lib/wallet-selector";

export type { Network, NetworkId } from "./lib/options.types";
export type {
  Subscription,
  StorageService,
  JsonStorageService,
} from "./lib/services";
export type { Optional } from "./lib/utils.types";

export type {
  WalletSelectorState,
  ModuleState,
  AccountState,
} from "./lib/store.types";

export type {
  WalletModuleFactory,
  WalletModule,
  WalletBehaviourFactory,
  WalletBehaviourOptions,
  Wallet,
  WalletType,
  WalletMetadata,
  WalletEvents,
  BrowserWalletMetadata,
  BrowserWalletBehaviour,
  BrowserWallet,
  InjectedWalletMetadata,
  InjectedWalletBehaviour,
  InjectedWallet,
  HardwareWalletMetadata,
  HardwareWalletConnectParams,
  HardwareWalletBehaviour,
  HardwareWallet,
  BridgeWalletMetadata,
  BridgeWalletBehaviour,
  BridgeWallet,
  Account,
  Transaction,
  Action,
  ActionType,
  CreateAccountAction,
  DeployContractAction,
  FunctionCallAction,
  TransferAction,
  StakeAction,
  AddKeyAction,
  DeleteKeyAction,
  DeleteAccountAction,
  AddKeyPermission,
} from "./lib/wallet";

export type { FinalExecutionOutcome } from "near-api-js/lib/providers";

export { waitFor } from "./lib/helpers";
