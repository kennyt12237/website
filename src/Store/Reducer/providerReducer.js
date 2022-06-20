import { createSlice } from "@reduxjs/toolkit";

export const providerSlice = createSlice({
  name: "counter",
  initialState: {
    provider: {},
  },
  reducers : {
    connect: (state, action) => {
        state.provider = action.payload
    },
    disconnect: (state) => {
        state.provider = {};
    }
  }
});

export const { connect, disconnect } = providerSlice.actions;

export default providerSlice.reducer;
// const initialState = {
//   provider: {},
// };

// export default function providerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "connectProvider":
//       return {
//         provider: action.payload,
//       };
//     case "disconnectProvider":
//       return {
//         provider: {},
//       };
//     default:
//       return state;
//   }
// }
