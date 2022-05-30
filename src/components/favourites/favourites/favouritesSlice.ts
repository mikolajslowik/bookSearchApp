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
      state.favourites = [
        ...state.favourites,
        {
          ...action.payload,
          isLocal: true,
        },
      ];
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    removeFavourites: (state, action) => {
      state.favourites = state.favourites.filter((el) => {
        return el.id !== action.payload.id;
      });
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { setFavourites, removeFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
