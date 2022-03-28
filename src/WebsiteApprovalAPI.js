import { useState, useEffect } from "react";

export default function WebsiteApprovalAPI(contracts, walletAddress) {
  const [projectContract, setProjectContract] = useState();
  const [allowance, setAllowance] = useState();

  useEffect(() => {
    if (contracts) {
      setProjectContract(contracts[0]);
    }
  }, [contracts]);

  const addUserApproval = async (projectNum, message) => {
    return await projectContract.methods
      .addUserApproval(projectNum, message)
      .send({ from: walletAddress }, (promise) => {
        return promise;
      });
  };

  const getNumberOfProjectApproval = async (projectNum) => {
    return await projectContract.methods
      .getNumberOfProjectApproval(projectNum)
      .call((promise) => {
        return promise;
      });
  };

  const getUserApprovalForProject = async (projectNum) => {
    console.log(projectContract);
    return await projectContract.methods
      .getUserApprovalForProject(projectNum)
      .call();
  };

  return {
    addUserApproval,
    getNumberOfProjectApproval,
    getUserApprovalForProject,
  };
}
