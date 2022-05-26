import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../Tile.tsx/Tile";

export interface FavouritesState {
  favourites: Book[];
}

const initialState: FavouritesState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favouritesSlice",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      console.log("setFav", state.favourites, action.payload.isLocal);
      state.favourites = [...state.favourites, action.payload];
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    toggleFavourites: (state, action) => {
      state.favourites = [...state.favourites, action.payload.isLocal];
      // problem
    },
  },
});

export const { setFavourites, toggleFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
