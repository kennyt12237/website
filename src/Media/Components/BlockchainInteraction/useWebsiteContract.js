import React, { useState, useContext, useMemo } from "react";
import { useEffect } from "react";
import { Ethers, parseBigNumberToString, WalletContext } from "../../../Web3";
import { websiteContract } from "../../../Contracts/websiteContract";

// Custom react hook to fetch website data from the blockchain through deployed smart contract.
function useWebsiteContract(projectNumber) {
  const [totalUpvote, setTotalUpvote] = useState();
  const [userResponse, setUserResponse] = useState();

  const { walletProvider } = useContext(WalletContext);
  const { getWrappedProvider, getContract } = Ethers();

  const contract = useMemo(() => {
    if (walletProvider) {
      const wrappedProvider = getWrappedProvider(walletProvider);
      const signer = wrappedProvider.getSigner();
      return getContract(websiteContract.address, websiteContract.abi, signer);
    }
  }, [walletProvider]);

  useEffect(() => {
    setTotalUpvote(null);
    setUserResponse(null);
  }, [projectNumber]);

  useEffect(() => {
    if (contract) {
      contract
        .getNumberOfProjectApproval(projectNumber)
        .then((res) => {
          setTotalUpvote(parseBigNumberToString(res));
        })
        .catch((error) => console.log(error));

      contract
        .getUserApprovalForProject(projectNumber)
        .then((res) => {
          setUserResponse(res);
        })
        .catch((error) => console.log(error));
    }
  }, [contract, projectNumber]);

  const sendUserResponse = async (text) => {
    return await contract.addUserApproval(projectNumber, text);
  };

  return {
    totalUpvote,
    userResponse,
    sendUserResponse,
  };
}

export { useWebsiteContract };
