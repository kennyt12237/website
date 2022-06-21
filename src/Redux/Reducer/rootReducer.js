import walletProviderReducer from "./walletProviderSlice";

const rootReducer = {
  reducer: {
    walletProvider: walletProviderReducer,
  },
};

export default rootReducer;