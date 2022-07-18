export default function WebsiteContractAPI(contract) {
  const addUserApproval = (projectNum, message) => {
    return contract.addUserApproval(projectNum, message);
  };

  const getNumberOfProjectApproval = async (projectNum) => {
    return contract.getNumberOfProjectApproval(projectNum);
  };

  const getUserApprovalForProject = async (projectNum) => {
    return contract.methods.getUserApprovalForProject(projectNum);
  };

  return {
    addUserApproval,
    getNumberOfProjectApproval,
    getUserApprovalForProject,
  };
}
