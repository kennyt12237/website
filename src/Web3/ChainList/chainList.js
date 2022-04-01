const validChainList = {
  3: "Ropsten Network",
};

const checkSupportedChain = (chainId) => {
  if (chainId) {
    chainId = chainId.replace("0x", "");
    const validChainKeys = Object.keys(validChainList);
    for (let i = 0; i < validChainKeys.length; i++) {
      if (validChainKeys[i] === chainId) {
        return true;
      }
    }
  }

  return false;
};

export { validChainList, checkSupportedChain };
