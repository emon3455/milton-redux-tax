import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {
  addressInfo: {},
};

const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    addressAction: (state, action: PayloadAction<boolean>) => {
      state.addressInfo = action.payload;
    },
  },
});

export const { addressAction } = addressSlice.actions;

export default addressSlice.reducer;
