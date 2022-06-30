import { createSlice } from "@reduxjs/toolkit";

export const walletProviderSlice = createSlice({
  name: "Wallet Provider",
  initialState: {
    walletProvider: null,
  },
  reducers: {
    setWalletProvider: (state, action) => {
      state.walletProvider = action.payload;
    },
    removeWalletProvider: (state) => {
      state.walletProvider = null;
    },
  },
});

export const selectWalletProvider = (state) => {
  return state.walletProvider ? true : false;
};

export const { setWalletProvider, removeWalletProvider } =
  walletProviderSlice.actions;

export default walletProviderSlice.reducer;
