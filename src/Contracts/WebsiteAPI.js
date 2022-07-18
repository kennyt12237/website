export default function WebsiteContractAPI(contract) {
  const addUserApproval = (projectNum, message) => {
    return contract.addUserApproval(projectNum, message);
  };

  const getNumberOfProjectApproval = async (projectNum) => {
    return await contract.getNumberOfProjectApproval(projectNum);
  };

  const getUserApprovalForProject = async (projectNum) => {
    return await contract.methods.getUserApprovalForProject(projectNum);
  };

  return {
    addUserApproval,
    getNumberOfProjectApproval,
    getUserApprovalForProject,
  };
}
