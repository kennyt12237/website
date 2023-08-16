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
<<<<<<< HEAD
  address: "0x4aeDc8F74296e5DcddC9a908A791224789bE927A",
=======
  address: "***REMOVED***",
>>>>>>> 9dc711cfa2a8401b88aaaa4057bad9cb1d6fe7cc
};

export { websiteContract };
