import React, { useContext, useEffect, useState } from "react";
import { useSmartContract, WalletContext } from "../../Web3";
import WebsiteApprovalAPI from "../../Contracts/WebsiteApprovalAPI";
import { websiteApprovalContract } from "../../Contracts/smartContract";
import { useNotification } from "../../Notification";
import "../scss/WriteAndUpvoteWeb3.scss";

export default function WriteAndUpvoteWeb3(props) {
  const { title, defaultText, imageUrl, projectNumber } = props;

  const [loading, setLoading] = useState(true);
  const [userApproval, setUserApproval] = useState();
  const [totalUpvote, setTotalUpvote] = useState();
  const [textInput, setTextInput] = useState();
  const { successAlert, failedAlert } = useNotification();
  const smartContract = useSmartContract(websiteApprovalContract);
  const { getWalletAddress } = useContext(WalletContext);
  const {
    addUserApproval,
    getNumberOfProjectApproval,
    getUserApprovalForProject,
  } = WebsiteApprovalAPI(smartContract, getWalletAddress());

  const addUserApprovalAPI = async (projectNum, message) => {
    await addUserApproval(projectNum, message)
      .then((value) => {
        successAlert("Message sent to the blockchain successfully!");
      })
      .catch((err) => {
        failedAlert(err.message);
      });
  };

  useEffect(() => {
    if (smartContract) {
      const getUserApprovalForProjectAPI = async (projectNum) => {
        return await getUserApprovalForProject(projectNum)
          .then((result) => {
            setUserApproval(result.message);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

      const getProjectApprovalAPI = async (projectNum) => {
        return await getNumberOfProjectApproval(projectNum)
          .then((result) => {
            setTotalUpvote(result);
          })
          .catch((error) => {
            failedAlert(error.message);
          });
      };
      getUserApprovalForProjectAPI(projectNumber);
      getProjectApprovalAPI(projectNumber);
    }
  }, [getWalletAddress, smartContract, projectNumber]);

  useEffect(() => {
    if (totalUpvote) {
      setLoading(false);
    }
  }, [totalUpvote]);

  return loading ? (
    <div className="web3-message-container__loading"> Loading... </div>
  ) : userApproval && userApproval.length > 0 ? (
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
        <div> You Wrote: {userApproval} </div>
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
