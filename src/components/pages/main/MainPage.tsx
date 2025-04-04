"use client";

import Spinner from "@/components/ui/Spinner";
import PokemonCard from "@/components/ui/PokemonCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import ErrorMessage from "@/components/ui/ErrorMessage";

import { usePokemonsSelectors } from "@/store/hooks/usePokemonsSelectors";

export default function MainPage() {
    const { pokemons, search, fetchLoading, fetchError } = usePokemonsSelectors();

    return (
        <>
            <main>
                <SearchBar />

                {search !== "" && <h1>Showing {search}</h1>}

                {fetchLoading && !fetchError && <Spinner />}

                {(!fetchLoading && !fetchError) && (
                    <div className="container">
                        <div className="pokemons w-full">
                            {pokemons.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} />)}
                        </div>
                    </div>
                )}

                {fetchError && <ErrorMessage message={fetchError} />}
            </main>

            <Pagination />
        </>
    )
}
