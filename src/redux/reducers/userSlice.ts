import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../typings/global";

// Initial state
const initialState: { user: IUser | null } = {
  user: null,
};

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser | null>) => {
      // Refreshing the user dates with action.payload
      state.user = action.payload;
    },
  },
});

// Export actions
export const { updateUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
