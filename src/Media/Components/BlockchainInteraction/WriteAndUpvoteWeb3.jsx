import React from "react";
import { useNotification } from "../../../Notification";
import "./scss/WriteAndUpvoteWeb3.scss";

export default function WriteAndUpvoteWeb3(props) {
  const {
    title,
    defaultText,
    imageUrl,
    projectNumber,
    totalUpvote,
    userResponse,
  } = props;
  const { successAlert, failedAlert } = useNotification();
  const { upVoted, message } = userResponse;

  return upVoted ? (
    <div className="web3-message-container">
      <div className="web3-message-container__title">
        <img
          className="web3-message-container__title__image"
          src="./check.svg"
          alt="Checkmark"
        />
        Thanks for upvoting!
      </div>
      <div className="web3-message-container__upvoted">
        <div> You Wrote: {message} </div>
        <div> Total Upvotes: {totalUpvote} </div>
      </div>
    </div>
  ) : (
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
