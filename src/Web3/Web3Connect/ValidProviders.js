const validProviders = ["metamask", "coinbase"];

const checkValidProvider = (provider) => {
  if (validProviders.includes(provider)) {
    return true;
  }

  return false;
};

export {
    validProviders,
    checkValidProvider
}