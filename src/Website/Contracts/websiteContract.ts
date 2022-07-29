interface Contract {
    abi : Array<String>,
    address : string,
}

const websiteContract : Contract = {
  abi : [
   "function addUserApproval(uint256 projectNum, string message) public returns (bool success)",
   "function getNumberOfProjectApproval(uint256 projectNum) public view returns (uint256 num)",
   "function getUserApprovalForProject(uint256 projectNum) public view returns (tuple(bool upVoted, string message))",
  ],
  address: "0x420dd7E76615c7A4Caf2D3aCC0a9DAD200E8CE87",
};

export { websiteContract };
