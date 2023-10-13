import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./reducers/SavedReducer";

export default configureStore({
  reducer: {
    booking: SavedReducer,
  },
});
