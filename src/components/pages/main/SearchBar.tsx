"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { usePokemonsActions } from "@/store/hooks/usePokemonsActions";

export default function SearchBar() {
    const {getPokemonsAction, searchPokemonAction, fetchErrorAction} = usePokemonsActions();

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchTerm === "") return;

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`).then(res => res.json());

            getPokemonsAction([{
                id: response.id,
                name: response.name,
                url: response.sprites.other["official-artwork"].front_default,
                types: response.types,
            }])

            searchPokemonAction(searchTerm);
            setSearchTerm("");
            fetchErrorAction(null);
        } catch (error) {
            console.log(error);

            fetchErrorAction(`Pokemon "${searchTerm}" not found`);
            searchPokemonAction("");
        }
    };
  
    return (
        <div className="search-container all-center w-full">
            <form onSubmit={handleSubmit} className="all-center w-full">
                <input
                    id="search"
                    value={searchTerm}
                    onChange={handleInputChange}         
                    type="text" placeholder="Search your favorite Pokemon" 
                    className="w-full" 
                />

                <button type="submit" className="button-action">Search</button>
            </form>
        </div>
    )
}