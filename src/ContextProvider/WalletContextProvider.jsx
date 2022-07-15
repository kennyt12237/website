import React, { useState, createContext } from "react";

const WalletContext = createContext();

function WalletContextProvider(props) {
  const { children } = props;
  const [provider, setProvider] = useState();

  return (
    <WalletContext.Provider value={{ provider, setProvider }}>
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletContextProvider };
