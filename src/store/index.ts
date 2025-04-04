import { configureStore, combineReducers } from '@reduxjs/toolkit';

import pokemonSlice from './slices/pokemons';

export const rootReducer = combineReducers({
    pokemonReducer: pokemonSlice
})

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];