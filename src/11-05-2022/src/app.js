import { useEffect, useState } from 'react';

function App() {
  const [pokemonId, setPokemonId] = useState('1');
  const [pokemonResponse, setPokemonResponse] = useState({});
  const [getInput, setGetInput] = useState('');
  const [error, setError] = useState(false);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        );
        const data = await response.json();
        setPokemonResponse(data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    })();
  }, [pokemonId]);
  
  return (
    <div className="App">
      <div>
        {!error && (
          <>
            <h1>{pokemonResponse?.name}</h1>
            <img src={pokemonResponse?.sprites?.front_default} alt="pokemon"/>
          </>
        )}
      </div>
      <div>
        <input
          type="text"
          aria-label="Insira um id"
          onChange={(event) => setGetInput(event.target.value)}
        />
        <button
          onClick={() => {
            setPokemonId(getInput);
          }}
        >
          Felipe troxa
        </button>
        {error && <h4>Id inválido, digite novamente!</h4>}
      </div>
    </div>
  );
}

export default App;
