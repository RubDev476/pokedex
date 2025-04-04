"use client";

import { useEffect } from "react";

import { usePokemonsActions } from "@/store/hooks/usePokemonsActions";
import { usePokemonsSelectors } from "@/store/hooks/usePokemonsSelectors";

import Image from "next/image";

import type { Pokemon } from "@/types/global";

export default function Header() {
    const { currentPage, limitItems } = usePokemonsSelectors();
    const { getPokemonsAction, getTotalPagesAction, fetchLoadingAction, fetchErrorAction } = usePokemonsActions();

    useEffect(() => {
        getTotalPagesAction(Math.ceil(200 / limitItems));
    }, []) // eslint-disable-line

    useEffect(() => {
        const fetchPokemons = async (page: number) => {
            fetchErrorAction(null);
            fetchLoadingAction(true);
    
            let data: Pokemon[] = [];
    
            const start = (page - 1) * limitItems;
            const end = page * limitItems;
    
            try {
                for (let i = start; i < end; i++) {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`).then(res => res.json());
        
                    data = [...data, {
                        id: response.id,
                        name: response.name,
                        url: response.sprites.other["official-artwork"].front_default,
                        types: response.types,
                    }];
    
                    //throw new Error("Error fetching pokemons"); // Simulate an error for testing
                }
        
                getPokemonsAction(data);
        
                window.scrollTo(0, 0);
        
                fetchLoadingAction(false);
            } catch (error) {
                console.log(error);
    
                fetchErrorAction("Error fetching pokemons");
            }
        };
        
        if(currentPage > 0) fetchPokemons(currentPage);
    }, [currentPage])

    return (
        <header className="w-full">
            <div>
                <p>Rubén Palma Estrada</p>

                <Image src={"/pokedex.png"} alt="pokedex" width={120} height={40} priority />
            </div>
        </header>
    )
}