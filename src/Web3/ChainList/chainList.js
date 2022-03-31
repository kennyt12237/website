const validChainList = {
  3: "Ropsten Network",
};

const checkSupportedChain = (chainId) => {
  const validChainKeys = Object.keys(validChainList);
  for (let i = 0; i < validChainKeys.length; i++) {
    if (validChainKeys[i] === chainId) {
      return true;
    }
  }

  return false;
};

export { validChainList, checkSupportedChain };
