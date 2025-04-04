"use client";

import { usePokemonsActions } from "@/store/hooks/usePokemonsActions";
import { usePokemonsSelectors } from "@/store/hooks/usePokemonsSelectors";

export default function Pagination() {
    const {currentPage, totalPages, search} = usePokemonsSelectors();
    const {nextPageAction, previousPageAction, searchPokemonAction, restartAction} = usePokemonsActions();

    const viewAllPokemons = () => {
        searchPokemonAction("");
        restartAction();
    }

    return (
        <div className="pagination">
            <div className="container">
                {search === "" ? (
                    <div className="all-center buttons-container">
                        <button className="global-transition button-action" onClick={previousPageAction} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>
                            {currentPage} / {totalPages}
                        </span>
                        <button className="global-transition button-action" onClick={nextPageAction} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                ): (
                    <button className="button-action" onClick={viewAllPokemons} >Ver todos los pokemones</button>
                )}
            </div>
        </div>
    )
}
