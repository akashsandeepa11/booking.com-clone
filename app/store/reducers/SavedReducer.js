import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
};

const SavedSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    savedPlaces: (state, action) => {
      state.booking.push({ ...action.payload });
    },
  },
});

export const { savedPlaces } = SavedSlice.actions;
export default SavedSlice.reducer;
