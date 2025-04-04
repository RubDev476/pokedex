import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { PokemonsState } from '@/types/store';
import type { Pokemon } from '@/types/global';

const initialState: PokemonsState = {
    pokemons: [],
    currentPage: 1,
    totalPages: 0,
    limitItems: 6,
    search: "",
    fetchLoading: true,
    fetchError: null
};

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        getPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemons = action.payload;
        },
        getTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        nextPage: (state) => {
            const {currentPage, totalPages} = state;

            if (currentPage < totalPages) {
                state.currentPage = currentPage + 1;
            }
        },
        previousPage: (state) => {
            const {currentPage} = state;

            if (currentPage > 1) {
                state.currentPage = currentPage - 1;
            }
        },
        searchPokemon: (state, action: PayloadAction<string>) => {
            state.search = action.payload;

            if(action.payload !== "") {
                state.currentPage = 0;
            }
        },
        restart: (state) => {
            state.currentPage = 1;
        },
        fetchLoading: (state, action: PayloadAction<boolean>) => {
            state.fetchLoading = action.payload;
        },
        fetchError: (state, action: PayloadAction<string | null>) => {
            state.fetchError = action.payload;
        }
    },
});

export const { getPokemons, getTotalPages, nextPage, previousPage, searchPokemon, restart, fetchLoading, fetchError } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
