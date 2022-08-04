const validProviders: Array<string> = ["metamask", "coinbase"];

const checkSupportedProvider = (provider: string): boolean => {
    if (validProviders.includes(provider)) {
        return true;
    }
    return false;
};

export { validProviders, checkSupportedProvider };
