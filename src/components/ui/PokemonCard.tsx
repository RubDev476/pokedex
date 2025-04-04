import Image from "next/image";

import type { Pokemon } from "@/types/global";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <article className="w-full">
            <div className="all-center global-transition pokemon-card">
                <div className="img-container">
                    <Image src={pokemon.url} alt={pokemon.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
                </div>

                <p>{pokemon.name}</p>

                <div className="types">
                    {pokemon.types.map((type, index) => (
                        <span key={index} className={`type ${type.type.name}`}>
                            {type.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}
