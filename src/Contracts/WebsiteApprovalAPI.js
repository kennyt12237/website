export default function WebsiteApprovalAPI(contract, walletAddress) {
  const addUserApproval = async (projectNum, message) => {
    return await contract.methods
      .addUserApproval(projectNum, message)
      .send({ from: walletAddress }, (promise) => {
        return promise;
      });
  };

  const getNumberOfProjectApproval = async (projectNum) => {
    return await contract.methods
      .getNumberOfProjectApproval(projectNum)
      .call()
  };

  const getUserApprovalForProject = async (projectNum) => {
    return await contract.methods
      .getUserApprovalForProject(projectNum)
      .call({ from: walletAddress });
  };

  return {
    addUserApproval,
    getNumberOfProjectApproval,
    getUserApprovalForProject,
  };
}
