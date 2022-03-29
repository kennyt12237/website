const websiteApprovalContract = {
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "projectNum",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "addUserApproval",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "projectNum",
          type: "uint256",
        },
      ],
      name: "getNumberOfProjectApproval",
      outputs: [
        {
          internalType: "uint256",
          name: "num",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "projectNum",
          type: "uint256",
        },
      ],
      name: "getUserApprovalForProject",
      outputs: [
        {
          components: [
            {
              internalType: "bool",
              name: "upVoted",
              type: "bool",
            },
            {
              internalType: "string",
              name: "message",
              type: "string",
            },
          ],
          internalType: "struct Project.UserApproval",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  address: "0x420dd7E76615c7A4Caf2D3aCC0a9DAD200E8CE87",
};

export { websiteApprovalContract };
