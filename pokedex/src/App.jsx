import PokemonCard from './components/PokemonCard';

import "./App.css";

// function App() {
//   return (
//     <div>
//       <PokemonCard />
//     </div>
//   );
// }

function App() {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <section style={container}>
      <h1 style={{color: 'blue', fontWeight: 400}}>Hey! We're using inline style!</h1>
      <div>
        <PokemonCard />
      </div>
    </section>
  );
}

export default App;