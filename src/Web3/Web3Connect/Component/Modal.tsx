import React from "react";
import { useCallback } from "react";
import { walletProviderMapper } from "../Utils/walletMapper";
import Web3Button from "./Web3Button";
import "./scss/Modal.scss";
import { useMemo } from "react";

interface Props {
  showModal: boolean;
  onModalClose: (provider: any) => any;
  options?: Array<String>;
}

interface WalletDetails {
  name: string;
  imageSrc: string;
  provider: any;
}

export default function Modal({
  showModal,
  onModalClose,
  options,
}: Props): JSX.Element {
  const walletMapper: Array<WalletDetails> = walletProviderMapper(options);

  const getVisibility = useCallback(() => {
    if (showModal) {
      return {
        display: "flex",
      };
    }
    return {
      display: "none",
    };
  }, [showModal]);

  const providerPromise = (provider: any): Promise<any> =>
    new Promise(async (resolve, reject) => {
      if (!provider) {
        reject("No Provider Selected");
      }
      try {
        await provider.request({ method: "eth_requestAccounts" });
        resolve(provider);
      } catch (error) {
        reject(error);
      }
    });

  const providersEnabled = useMemo(() => {
    return walletMapper.filter((provider) => {
      if (provider.provider) {
        return provider;
      }
      return null;
    });
  }, [walletMapper]);

  return (
    <div
      className="modal-background"
      style={getVisibility()}
      onClick={() => onModalClose(providerPromise(null))}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container--text-size">Connect Wallet</div>
        <div className="modal-container__buttons">
          {providersEnabled.length > 0 ? (
            providersEnabled.map((provider, index) => {
              if (provider.provider) {
                return (
                  <Web3Button
                    text={provider.name}
                    imageSrc={require(`../Assets/${provider.imageSrc}`)}
                    onCustomButtonClick={() =>
                      onModalClose(providerPromise(provider.provider))
                    }
                    key={index}
                  />
                );
              }
              return null;
            })
          ) : (
            <div>
              <div> No provider detected! Install a wallet to connect. </div>
              <div>
                <a
                  target="blank"
                  href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                >
                  Install Metamask
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
