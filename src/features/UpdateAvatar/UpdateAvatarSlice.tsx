import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Image {
  path: string;
}

const initialState = {
  path: "https://picsum.photos/200/300",
};

export const UpdateAvatarSlice = createSlice({
  name: "updateAvatar",
  initialState,
  reducers: {
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
});

export const { updateAvatar } = UpdateAvatarSlice.actions;
export default UpdateAvatarSlice.reducer;
