import React from "react";

// @refresh reset
interface SingleWalletProps {
  id: string;
  iconUrl: string;
  title: string;
  description: string | null;
  key: number;
  isLocationSidebar: boolean;
  selected: string;
  deprecated: string;
  onClick: () => void;
  isMobile: boolean
  getWallet: boolean
}

export const SingleWallet: React.FC<SingleWalletProps> = ({
  id,
  iconUrl,
  title,
  description,
  key,
  selected,
  deprecated,
  isLocationSidebar,
  onClick,
  getWallet,
  isMobile
}) => {
  return (
    <div
      className={` ${(getWallet && isMobile) ? "single-wallet-get" : "single-wallet"} ${selected} ${deprecated} ${
        isLocationSidebar ? "sidebar  " : ""
      } `}
      key={key}
      data-id={id}
      onClick={selected ? undefined : onClick}
    >
      <div className={"icon"}>
        <img src={iconUrl} alt={title} />
      </div>
      <div className={"content"}>
        <div className={"title"}>{title}</div>
        <div className={"description"}>{description}</div>
      </div>
      {deprecated !== "" ? (
        <div className={"warning-triangle"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.95215 16.3536L10.2152 5.85657C10.9531 4.38481 13.0538 4.38519 13.7912 5.85723L19.0494 16.3543C19.7156 17.6841 18.7486 19.25 17.2612 19.25H6.74001C5.25228 19.25 4.28535 17.6835 4.95215 16.3536Z"
              stroke="#E6B73E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 10V12"
              stroke="#E6B73E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
              stroke="#E6B73E"
            />
          </svg>
        </div>
      ) : null}
      {!isLocationSidebar ? (
        <div className={"button-get"}>
          <button className={"get-wallet"}>Get</button>
        </div>
      ) : null}
    </div>
  );
};
