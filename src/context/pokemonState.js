import React, { useReducer } from "react";
import pokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";


const PokemonState = ({ children }) => {
    const initialState = {
      pokemon: 'asd'
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState)


  return <pokemonContext.Provider value={{ pokemon: state.pokemon}}>{children}</pokemonContext.Provider>;
};

export default PokemonState;