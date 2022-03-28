export default function WebsiteApprovalAPI(contract) {

    const addUserApproval = async (projectNum, message) => {
        return await contract.methods.addUserApproval(projectNum, message).call();
    }
    
    const getNumberOfProjectApproval = async (projectNum) => {
        return await contract.methods.getNumberOfProjectApproval(projectNum).call();
    }

    const getUserApprovalForProject = async (projectNum) => {
        return await contract.methods.getUserApprovalForProject(projectNum).call();
    }

    return {
        addUserApproval,
        getNumberOfProjectApproval,
        getUserApprovalForProject,
    }
}
