import React from "react";
import "../scss/Web3Message.scss";
import useSmartContract from "../../Web3/hooks/useSmartContract";
import { websiteApprovalContract } from "../../smartContract";

export default function Web3Message(props) {
  const { title, defaultText, imageUrl } = props;
  const smartContract = useSmartContract(websiteApprovalContract);
  
  return (
    <div className="web3-message-container">
      <div className="web3-message-container__title"> {title} </div>
      <div className="web3-message-container__interactive">
        <input
          className="web3-message-container__interactive__write"
          type="text"
          placeholder={defaultText}
        />
        <div className="web3-message-container__interactive__button" onClick={() => console.log(smartContract)}>
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
