type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    types: PokemonType[];
}
