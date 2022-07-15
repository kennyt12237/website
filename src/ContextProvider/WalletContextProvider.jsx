import React, { useState, createContext } from "react";

const WalletContext = createContext();

function WalletContextProvider(props) {
  const { children } = props;
  const [walletProvider, setWalletProvider] = useState();

  return (
    <WalletContext.Provider value={{ walletProvider, setWalletProvider }}>
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletContextProvider };
