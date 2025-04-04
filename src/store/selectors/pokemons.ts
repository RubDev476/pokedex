import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "..";

const pokemonsState = (state: RootState) => state.pokemonReducer;

export const pokemonsSelect = createSelector(
    [pokemonsState],
    (state) => state.pokemons
);

export const currentPageSelect = createSelector(
    [pokemonsState],
    (state) => state.currentPage
);

export const totalPagesSelect = createSelector(
    [pokemonsState],
    (state) => state.totalPages
);

export const limitItemsSelect = createSelector(
    [pokemonsState],
    (state) => state.limitItems
);

export const searchSelect = createSelector(
    [pokemonsState],
    (state) => state.search
);

export const fetchLoadingSelect = createSelector(
    [pokemonsState],
    (state) => state.fetchLoading
);

export const fetchErrorSelect = createSelector(
    [pokemonsState],
    (state) => state.fetchError
);
