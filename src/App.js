import Card from './components/Card';
import { useState } from 'react';
import './App.css';

function App() {
  const [totalClicks, updateTotalClicks] = useState(0)

  function handleTotalClick(){
    updateTotalClicks(totalClicks + 1);
  }

  const Pokedex = {
    regions: [
      { 
        regionName: 'Okinawa', 
        pokemonList: [
          {
            pokemonName: 'Pikachu',
            type: 'electricity'
          },
          { 
            pokemonName: 'Squirtle',
            type: 'water'
          },
          {
            pokemonName: 'Charmander',
            type: 'fire'
          }
        ]
      },
      { 
        regionName: 'Kanto',
        pokemonList: [
          {
            pokemonName: 'Purin',
            type: 'fairy'
          },
          { 
            pokemonName: 'Diglett',
            type: 'electricity'
          },
          { 
            pokemonName: 'Bulbasaur',
            type: 'leaf'
          }
        ]
      }
    ]
  }

  // const initialPokeVotes = constructPokeVotes(Pokedex)

  const [voteCountsOfpokeVotes, updatePokeVotes] = useState(0)

  // function handlePokemonVotes(pokemon) {
  //   pokemonVotes[pokemon] = pokemonVotes[pokemon] + 1
  //   updatePokeVotes(pokemonVotes)
  // }

  return (
    <>
      <header>
        <h1>Pokemon Votes</h1>
        <div className='vote-results'>
          {PokemonVoteResults(Pokedex)}
        </div>
        <h3>Total Votes: {totalClicks}</h3>    
        {/* {KeysOfpokeVotes.map((pokemon) => {
          console.log(KeysOfpokeVotes);
          return <h3 key={pokemon}> {pokemon} : {pokeVotes[pokemon]}</h3>
        })} */}
      </header>
      <body>
        {listAllPokemon(Pokedex).map((pokemon) => {
          return <Card 
              pokemonName={pokemon.pokemonName}
              pokemonType={pokemon.type} 
              cardClickHandler={handleTotalClick}
            />
        })}
      </body>
    </>
  );
}

function listAllPokemon(Pokedex){
  return Pokedex.regions.flatMap(region => region.pokemonList)
} 

function PokemonVoteResults(Pokedex){
  const pokemonAndVotes = {}
  const voteResults = []
  listAllPokemon(Pokedex).map((pokemon) => {
    return pokemonAndVotes[pokemon.pokemonName] = 0
  })
  // console.log('pokemonAndVotes:', pokemonAndVotes);
  for (const pokemon in pokemonAndVotes){
    voteResults.push(
      <ul>{pokemon} : {pokemonAndVotes[pokemon]}</ul>
    );
  }
  return voteResults;
}

export default App;
