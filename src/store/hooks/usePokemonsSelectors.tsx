import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { pokemonsSelect, currentPageSelect, totalPagesSelect, limitItemsSelect, searchSelect, fetchLoadingSelect, fetchErrorSelect } from "../selectors/pokemons";
import { RootState } from "..";

export const usePokemonsSelectors = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const pokemons = useAppSelector(pokemonsSelect);
    const currentPage = useAppSelector(currentPageSelect);
    const totalPages = useAppSelector(totalPagesSelect);
    const limitItems = useAppSelector(limitItemsSelect);
    const search = useAppSelector(searchSelect);
    const fetchLoading = useAppSelector(fetchLoadingSelect);
    const fetchError = useAppSelector(fetchErrorSelect);

    return {
        pokemons,
        currentPage,
        totalPages,
        limitItems,
        search,
        fetchLoading,
        fetchError
    }
}
