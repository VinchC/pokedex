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
  ];

  let pokemon = pokemonList[0];

  return (
    <div>
      <PokemonCard props={pokemon} />;
    </div>
  );
}

export default App;


// import PokemonCard from './components/PokemonCard';

// function App() {

//   const pokemonList = [
//     {
//       name: "bulbasaur",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//       name: "mew",
//     },
//   ];

//   let pokemonInArray = pokemonList[0];

//   return (
//     <div>
//       <PokemonCard pokemonProp={pokemonInArray} />;
//     </div>
//   );
// }

// export default App;