import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Pokemon } from "@/types";

export interface SearchState {
  search: string;
  startupPokemon: Pokemon[];
}

const initialState: SearchState = {
  search: "",
  startupPokemon: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupPokemon: (state, action: PayloadAction<Pokemon[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;
