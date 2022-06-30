import { createSlice } from "@reduxjs/toolkit";

export const walletProviderSlice = createSlice({
  name: "Wallet Provider",
  initialState: {
    name: null,
    address: null,
    chainId: null,
    isConnected: false,
  },
  reducers: {
    setWalletProvider: (state, action) => {
      const { name, address, chainId, isConnected } = action.payload;
      state.name = name;
      state.address = address;
      state.chainId = chainId;
      state.isConnected = isConnected;
    },
    removeWalletProvider: (state) => {
      state.name = null;
      state.address = null;
      state.chainId = null;
      state.isConnected = false;
    },
  },
});

export const selectWalletProviderChain = (state) => {
  return state.walletProvider.chainId;
};

export const { setWalletProvider, removeWalletProvider } =
  walletProviderSlice.actions;

export default walletProviderSlice.reducer;
