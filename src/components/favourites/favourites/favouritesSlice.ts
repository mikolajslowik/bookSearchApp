import { createSlice } from "@reduxjs/toolkit";

export interface FavouritesState {
  favourites: boolean;
}

const initialState: FavouritesState = {
  favourites: false,
};

export const favouritesSlice: any = createSlice({
  name: "favouritesHandler",
  initialState,
  reducers: {
    setFavourites: (state) => {
      state.favourites = !state.favourites;
      // return { ...state, favourites: !state.favourites };
    },
  },
});

export const { setFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
