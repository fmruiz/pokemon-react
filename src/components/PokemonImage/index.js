import React, { useContext, useEffect } from "react";
import pokemonContext from "../../context/pokemonContext";
import { ContainerImg } from "./styles";

const PokemonImage = () => {
  const { pokemon, getPokemon } = useContext(pokemonContext);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <ContainerImg>
      <img
        src={pokemon ? pokemon.sprites.other.home.front_default : null}
        alt="pokemon"
      />
    </ContainerImg>
  );
};

export default PokemonImage;
