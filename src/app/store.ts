import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favouritesSlice, {
  setFavourites,
} from "../components/favourites/favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    setFavourites,
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
