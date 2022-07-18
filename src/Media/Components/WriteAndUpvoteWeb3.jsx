import React, { useContext, useMemo } from "react";
import WebsiteAPI from "../../Contracts/WebsiteAPI";
import { websiteContract } from "../../Contracts/websiteContract";
import { useNotification } from "../../Notification";
import { Ethers } from "../../Web3";
import { WalletContext } from "../../Web3";
import "../scss/WriteAndUpvoteWeb3.scss";

export default function WriteAndUpvoteWeb3(props) {
  const { title, defaultText, imageUrl, projectNumber } = props;
  const { successAlert, failedAlert } = useNotification();

  const { walletProvider } = useContext(WalletContext);
  const { getWrappedProvider, getContract } = Ethers();

  const wrappedProvider = useMemo(() => {
    if (walletProvider) {
      return getWrappedProvider(walletProvider);
    }
    return null;
  }, [walletProvider]);

  const websiteSC = useMemo(() => {
    if (wrappedProvider) {
        return getContract(websiteContract.address, websiteContract.abi, wrappedProvider);
    }
    return null;
  }, [wrappedProvider]);

  console.log(wrappedProvider);
  console.log(websiteSC);

  return (
    //     userApproval && userApproval.length > 0 ? (
    //     <div className="web3-message-container">
    //       <div className="web3-message-container__title">
    //         <img
    //           className="web3-message-container__title__image"
    //           src="./check.svg"
    //           alt="Checkmark"
    //         />
    //         Thanks for upvoting!
    //       </div>
    //       <div className="web3-message-container__upvoted">
    //         <div> You Wrote: {userApproval} </div>
    //         <div> Total Upvotes: {totalUpvote} </div>
    //       </div>
    //     </div>
    //   ) : (
    <div className="web3-message-container">
      <div className="web3-message-container__title"> {title} </div>
      <div className="web3-message-container__interactive">
        <input
          className="web3-message-container__interactive__write"
          type="text"
          placeholder={defaultText}
          //   onInput={(e) => setTextInput(e.target.value)}
        />
        <div
          className="web3-message-container__interactive__button"
          //   onClick={() => addUserApprovalAPI(projectNumber, textInput)}
        >
          <img
            className="web3-message-container__interactive__button__image"
            src={imageUrl}
            alt="Thumbs Up Button"
          />
          <p className="web3-message-container__interactive__button__text">
            Upvote
          </p>
        </div>
      </div>
    </div>
  );
}
