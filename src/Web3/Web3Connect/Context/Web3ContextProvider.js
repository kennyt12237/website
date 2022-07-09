import React, { useState, createContext } from "react";

const Web3Context = createContext();

export function Web3ContectProvider(props) {
  const { children } = props;
  const [provider, setProvider] = useState();

  const getProvider = () => {
    return provider;
  };

  return (
    <Web3Context.Provider value={{provider, setProvider}}>
      {children}
    </Web3Context.Provider>
  );
}

export { Web3Context, Web3ContectProvider };
