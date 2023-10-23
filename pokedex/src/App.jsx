import PokemonCard from './components/PokemonCard';

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
    {
      name: pops,
      imgSrc: 2,
    },
  ];

  let pokemon = pokemonList[2];

  return (
    <div>
      <PokemonCard props={pokemon} />
    </div>
  );
}

export default App;