import walletProviderReducer from "./walletProviderSlice";

const rootReducer = {
  reducer: {
    walletProvider : walletProviderReducer,
  },
};

export const selectWalletProvider = (state) => {
    return state.walletProvider;
}

export default rootReducer;