import React from "react";
import { WhatWallet } from "./WhatWallet";
import Icon from "../../../../../images/black-white.jpg";
import { SingleWallet } from "./SingleWallet";
import { ModuleState } from "@near-wallet-selector/core";

interface WalletHomeProps {
  getWallet: boolean;
  onClick: () => void;
  getThreeWallets: Array<ModuleState>;
  isMobile: boolean
}

export const WalletHome: React.FC<WalletHomeProps> = ({
  getWallet,
  getThreeWallets,
  onClick,
  isMobile
}) => {
  return (
    <div>
      {getWallet ? (
        <div>
          {getThreeWallets.map((value, key) => {
            return (
              <SingleWallet
                isMobile = {isMobile}
                getWallet={getWallet}
                id={value.id}
                iconUrl={value.metadata.iconUrl}
                title={value.metadata.name}
                description={value.metadata.description || ""}
                key={key}
                onClick={() => {
                  alert("hide");
                }}
                deprecated={""}
                selected={""}
                isLocationSidebar={false}
              />
            );
          })}
        </div>
      ) : (
        !isMobile ? <div>
          <WhatWallet
            title="Secure & Manage Your Digital Assets"
            description="Safely store and transfer your crypto and NFTs."
            icon={Icon}
          />
          <WhatWallet
            title="Log In to Any NEAR App"
            description="No need to create new accounts or credentials. Connect your wallet and you are good to go!"
            icon={Icon}
          />
          <button className={"middleButton"} onClick={onClick}>
            Get a Wallet
          </button>
        </div>
          :

          <div>
            <p className="content">
              Use a wallet to secure and manage your NEAR assets, and to log in to any NEAR app without the need for usernames and passwords.
            </p>

            <button className={"middleButton"} onClick={onClick}>
              Get a Wallet
            </button>
          </div>
      )


      }
    </div>
  );
};
