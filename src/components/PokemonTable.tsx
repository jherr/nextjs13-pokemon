import { Pokemon } from "@/types";

const PokemonTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
