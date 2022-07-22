const validProviders = ["metamask", "coinbase"];

const checkSupportedProvider = (provider) => {
  if (validProviders.includes(provider)) {
    return true;
  }

  return false;
};

export { validProviders, checkSupportedProvider };
