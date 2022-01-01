import React, { useReducer } from "react";
import pokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import * as types from "../types";

const PokemonState = ({ children }) => {
  const initialState = {
    pokemon: null,
    newPokemon: "",
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const newPokemonFn = (pokemon) => {
    dispatch({
      type: types.NEW_POKEMON,
      payload: pokemon,
    });
  };

  const getPokemon = async (pokemon) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
      (res) => res.json()
    );

    dispatch({
      type: types.GET_POKEMON,
      payload: data,
    });
  };

  return (
    <pokemonContext.Provider
      value={{
        pokemon: state.pokemon,
        newPokemon: state.newPokemon,
        getPokemon,
        newPokemonFn,
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonState;
