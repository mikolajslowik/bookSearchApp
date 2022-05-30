import {
  configureStore,
  ThunkAction,
  Action,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import favouritesSlice from "../components/favourites/favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    favouritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
