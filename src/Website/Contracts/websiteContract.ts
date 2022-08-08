interface Contract {
    abi : Array<string>,
    address : string,
}

const websiteContract : Contract = {
  abi : [
   "function addUserApproval(uint256 projectNum, string message) public returns (bool success)",
   "function getNumberOfProjectApproval(uint256 projectNum) public view returns (uint256 num)",
   "function getUserApprovalForProject(uint256 projectNum) public view returns (tuple(bool upVoted, string message))",
  ],
  address: "***REMOVED***",
};

export { websiteContract };
