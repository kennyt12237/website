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
  address: "0x29faA0CB967C78Cb2170454f3c4ec5ef88cbfFE5",
};

export { websiteContract };
