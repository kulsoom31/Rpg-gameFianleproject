import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from './Navbar';

const pokemonList = [
  {
    name: "Pikachu",
    health: 100,
    attack: 50
  },
  {
    name: "Charmander",
    health: 100,
    attack: 40
  },
  {
    name: "Squirtle",
    health: 110,
    attack: 45
  },
  {
    name: "Bulbasaur",
    health: 130,
    attack: 35
  }
]

function Adventure() {
  const [playerPokemon, setPlayerPokemon] = useState(pokemonList[0]);
  const [opponentPokemon, setOpponentPokemon] = useState(pokemonList[1]);
  const [playerDefeated, setPlayerDefeated] = useState(false);
  const [opponentDefeated, setOpponentDefeated] = useState(false);

  function handleAttack() {
    //calculate the damage
    let damage = playerPokemon.attack - opponentPokemon.attack;
    setOpponentPokemon(prevState => {
        const newHealth = prevState.health - damage;
        return {
          ...prevState,
          health: newHealth < 0 ? 0 : newHealth
        }
      });
    // check if the health is less than zero
  if(opponentPokemon.health < 0) opponentPokemon.health = 0;
    //check if the opponent is still alive
    if (opponentPokemon.health <= 0) {
        console.log(`You have defeated ${opponentPokemon.name}`);
        setOpponentDefeated(true);
    }
    //substract a random value between 1 and opponentPokemon.attack from player health
    let opponentDamage = playerPokemon.attack * 0.2;
    setPlayerPokemon(prevState => ({ ...prevState, health: prevState.health - opponentDamage }));
    if (playerPokemon.health <= 0) {
        console.log("You have died, game over");
        setPlayerDefeated(true);
    }
  }

  function handleOpponentSelection(pokemon) {
    setOpponentPokemon(pokemon);
  }

  return (
    <div>
  
    {playerDefeated ? <h3> You have died, game over.</h3> : 
    <div>
      <h1>Choose your Pokémon</h1>
      <select onChange={(e) => setPlayerPokemon(pokemonList[e.target.value])}>
        {pokemonList.map((pokemon, index) => (
          <option key={pokemon.name} value={index}>{pokemon.name}</option>
        ))}
      </select>
      <h2>{`Opponent: ${opponentPokemon.name} - Health: ${opponentPokemon.health} - Attack: ${opponentPokemon.attack}`}</h2>
    <h2>{`Player: ${playerPokemon.name} - Health: ${playerPokemon.health} - Attack: ${playerPokemon.attack}`}</h2>
      <button onClick={handleAttack}>Attack</button>
      {opponentDefeated && <h3> You have defeated the opponent!</h3>}
      <h3>Opponent selection</h3>
      <select onChange={(e) => handleOpponentSelection(pokemonList[e.target.value])}>
        {pokemonList.map((pokemon, index) => (
          <option key={pokemon.name} value={index}>{pokemon.name}</option>
        ))}
      </select>
    </div>
    }
    <div> <Footer /></div>
  </div>
  
  );
  
}

export default Adventure;
