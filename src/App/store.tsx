import { configureStore } from "@reduxjs/toolkit";
import updateAvatar from "../features/UpdateAvatar/UpdateAvatarSlice";
import handleTodosSlice from "../features/handleTodos/TodosSlice";

export const store = configureStore({
  reducer: {
    hanldeTodos: handleTodosSlice,
    updateAvartar: updateAvatar,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
