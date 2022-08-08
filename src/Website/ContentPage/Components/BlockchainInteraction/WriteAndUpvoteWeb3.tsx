import React, { useState } from "react";
import "./scss/WriteAndUpvoteWeb3.scss";

interface UserResponse {
  upVoted: boolean;
  message: string;
}
interface Props {
  title: string;
  defaultText: string;
  imageUrl: string;
  totalUpvote: string;
  userResponse: UserResponse;
  sendUserResponse: (text: string) => void;
}
export default function WriteAndUpvoteWeb3({
  title,
  defaultText,
  imageUrl,
  totalUpvote,
  userResponse,
  sendUserResponse,
}: Props): JSX.Element {
  const [textInput, setTextInput] = useState<string>("");
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
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setTextInput(target.value);
          }}
        />
        <div
          className="web3-message-container__interactive__button"
          onClick={() => sendUserResponse(textInput)}
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
