import { createSlice } from "@reduxjs/toolkit";

export const walletProviderSlice = createSlice({
  name: "Wallet Provider",
  initialState: {
    walletProvider: {},
  },
  reducers: {
    setWalletProvider: (state, action) => {
      state.provider = action.payload;
    },
    removeWalletProvider: (state) => {
      state.provider = {};
    },
  },
});

export const { setWalletProvider, removeWalletProvider } =
  walletProviderSlice.actions;

export default walletProviderSlice.reducer;
