import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";

import { getPokemons, getTotalPages, nextPage, previousPage, searchPokemon, restart, fetchLoading, fetchError } from "../slices/pokemons";
import { Pokemon } from "@/types/global";

export function usePokemonsActions() {
    const useAppDispatch: () => AppDispatch = useDispatch;
    const dispatch = useAppDispatch();

    const getPokemonsAction = (data: Pokemon[]) => dispatch(getPokemons(data));
    const getTotalPagesAction = (pages: number) => dispatch(getTotalPages(pages));
    const nextPageAction = () => dispatch(nextPage());
    const previousPageAction = () => dispatch(previousPage());
    const searchPokemonAction = (search: string) => dispatch(searchPokemon(search));
    const restartAction = () => dispatch(restart());
    const fetchLoadingAction = (loading: boolean) => dispatch(fetchLoading(loading));
    const fetchErrorAction = (error: string | null) => dispatch(fetchError(error));

    return {
        getPokemonsAction,
        getTotalPagesAction,
        nextPageAction,
        previousPageAction,
        searchPokemonAction,
        restartAction,
        fetchLoadingAction,
        fetchErrorAction
    };
}
