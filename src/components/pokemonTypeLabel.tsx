import { pokemonTypeMap } from '../pokemonTypesMap';

type PokemonTypeLabelProps = {
    type: string;
};

export const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
    const typeInfo = pokemonTypeMap.find((t) => t.jaType === type);

    return (
        <span 
        style={{
            backgroundColor: typeInfo?.color,
        }}
        key={type}
        className={`text-white px-3 py-1 rounded-full w-fit`}
        >
            {typeInfo?.jaType}
        </span>
    );
};
