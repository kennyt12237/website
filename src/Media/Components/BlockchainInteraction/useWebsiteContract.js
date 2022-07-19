import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Ethers, WalletContext } from "../../../Web3";
import { websiteContract } from "../../../Contracts/websiteContract";

function useWebsiteContract(projectNumber) {
  const [totalUpvote, setTotalUpvote] = useState();
  const [userResponse, setUserResponse] = useState();

  const { walletProvider } = useContext(WalletContext);
  const { getWrappedProvider, getContract } = Ethers();

  useEffect(() => {
    setTotalUpvote(null);
    setUserResponse(null);
  }, [projectNumber]);

  useEffect(() => {
    if (walletProvider) {
      const wrappedProvider = getWrappedProvider(walletProvider);
      const signer = wrappedProvider.getSigner();
      const contract = getContract(
        websiteContract.address,
        websiteContract.abi,
        signer
      );

      contract
        .getNumberOfProjectApproval(projectNumber)
        .then((res) => {
          setTotalUpvote(res);
          console.log(res);
        })
        .catch((error) => console.log(error));

      contract
        .getUserApprovalForProject(projectNumber)
        .then((res) => {
          setUserResponse(res);
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  }, [walletProvider, projectNumber]);

  return {
    totalUpvote,
    userResponse,
  };
}

export {
    useWebsiteContract
}
