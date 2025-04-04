import type { Pokemon } from "./global"

export type PokemonsState = {
    pokemons: Pokemon[];
    currentPage: number;
    totalPages: number;
    limitItems: number;
    search: string;
    fetchLoading: boolean;
    fetchError: null | string;
}
