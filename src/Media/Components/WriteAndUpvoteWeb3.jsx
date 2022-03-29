import React, { useContext, useEffect, useState } from "react";
import "../scss/WriteAndUpvoteWeb3.scss";
import useSmartContract from "../../Web3/hooks/useSmartContract";
import WebsiteApprovalAPI from "../../WebsiteApprovalAPI";
import { websiteApprovalContract } from "../../smartContract";
import { WalletContext } from "../../Web3/context/WalletContextProvider";

export default function WriteAndUpvoteWeb3(props) {
  const { title, defaultText, imageUrl, projectNumber } = props;

  const [userApproval, setUserApproval] = useState();
  const [textInput, setTextInput] = useState();
  const smartContract = useSmartContract(websiteApprovalContract);
  const { getWalletAddress } = useContext(WalletContext);
  const { addUserApproval, getUserApprovalForProject } = WebsiteApprovalAPI(
    smartContract,
    getWalletAddress()
  );

  const addUserApprovalAPI = async (projectNum, message) => {
    const result = await addUserApproval(projectNum, message);
    console.log(result);
  };

  useEffect(() => {
    if (smartContract) {
      const getUserApprovalForProjectAPI = async (projectNum) => {
        return await getUserApprovalForProject(projectNum).then((res) => {
          if (res.upVoted) {
            setUserApproval(res.message);
          }
        });
      };
      getUserApprovalForProjectAPI(projectNumber);
    }
  }, [smartContract]);

  return (userApproval && userApproval.length > 0 ) ? (
    <div className="web3-message-container">
              {console.log("SET")}
      <div className="web3-message-container__title"> {title} </div>
      <div> {userApproval} </div>
    </div>
  ) : (
    <div className="web3-message-container">
      <div className="web3-message-container__title"> {title} </div>
      <div className="web3-message-container__interactive">
        <input
          className="web3-message-container__interactive__write"
          type="text"
          placeholder={defaultText}
          onInput={(e) => setTextInput(e.target.value)}
        />
        <div
          className="web3-message-container__interactive__button"
          onClick={() => addUserApprovalAPI(projectNumber, textInput)}
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
