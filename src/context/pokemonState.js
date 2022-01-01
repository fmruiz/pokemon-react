import React, { useReducer } from "react";
import pokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import * as types from "../types";

const PokemonState = ({ children }) => {
  const initialState = {
    pokemon: null,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const getPokemon = async () => {
    const data= await fetch(
      `https://pokeapi.co/api/v2/pokemon/1`
    ).then((res) => res.json());

    dispatch({
      type: types.GET_POKEMON,
      payload: data,
    });
  };

  return (
    <pokemonContext.Provider
      value={{ pokemon: state.pokemon, getPokemon }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonState;
