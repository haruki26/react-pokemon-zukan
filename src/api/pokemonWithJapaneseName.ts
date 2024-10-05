import { fetchPokemonList, PokemonListResult } from "./pokemon";
import { fetchPokemonJapaneseName } from "./pokemonSpecies";

export type PokemonWithJapaneseName = {
    name: string;
    url: string;
    japaneseName: string;
    number: string;
};

export type PokemonListWithJapaneseNames = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonWithJapaneseName[];
};

export const fetchPokemonListWithJapaneseNames = async (
    offset: number = 0,
    limit: number = 20
): Promise<PokemonListWithJapaneseNames> => {
    const pokemonList: PokemonListResult = await fetchPokemonList(offset, limit);

    const updateResults: PokemonWithJapaneseName[] = await Promise.all(
        pokemonList.results.map(
            async (pokemon) => {
                const speciesUrl = pokemon.url.replace(
                    "https://pokeapi.co/api/v2/pokemon/",
                    "https://pokeapi.co/api/v2/pokemon-species/"
                );

                const japaneseName = await fetchPokemonJapaneseName(speciesUrl);

                // const pokemonDetails: Pokemon = await fetch(pokemon.url).then(res => res.)
            }
        )
    )
}