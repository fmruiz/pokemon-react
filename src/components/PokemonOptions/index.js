import React, { useContext, useEffect } from "react";
import pokemonContext from "../../context/pokemonContext";
import { ContainerName } from "./styles";

const PokemonOptions = () => {
  const { pokemon, getPokemon } = useContext(pokemonContext);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <ContainerName>
      <h2>{pokemon ? pokemon.name : null}</h2>
    </ContainerName>
  );
};

export default PokemonOptions;
