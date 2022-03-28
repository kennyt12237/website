import React, { useContext } from "react";
import "../scss/Web3Message.scss";
import useSmartContract from "../../Web3/hooks/useSmartContract";
import WebsiteApprovalAPI from "../../WebsiteApprovalAPI";
import { websiteApprovalContract } from "../../smartContract";
import { WalletContext } from "../../Web3/context/WalletContextProvider";

export default function Web3Message(props) {
  const { title, defaultText, imageUrl } = props;
  const smartContract = useSmartContract(websiteApprovalContract);
  const { getWalletAddress } = useContext(WalletContext);
  const {
    addUserApproval,
    getNumberOfProjectApproval,
    getUserApprovalForProject,
  } = WebsiteApprovalAPI(smartContract, getWalletAddress());

  const getNumberOfProjectApprovalAPI = async (projectNum) => {
    const result = await getNumberOfProjectApproval(projectNum);
  };

  const getUserApprovalForProjectAPI = async (projectNum) => {
    const result = await getUserApprovalForProject(projectNum);
    console.log(result)
  };

  const addUserApprovalAPI = async (projectNum, message) => {
    const result = await addUserApproval(projectNum, "MWAHAHA");
    console.log(result)
  };

  return (
    <div className="web3-message-container">
      <div className="web3-message-container__title"> {title} </div>
      <div className="web3-message-container__interactive">
        <input
          className="web3-message-container__interactive__write"
          type="text"
          placeholder={defaultText}
        />
        <div
          className="web3-message-container__interactive__button"
          onClick={() => addUserApprovalAPI(1, "HEllo")}
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
