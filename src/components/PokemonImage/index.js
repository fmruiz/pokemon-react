import React, { useContext, useEffect } from "react";
import pokemonContext from "../../context/pokemonContext";
import { ContainerImg } from "./styles";

const PokemonImage = () => {
  const { pokemon, newPokemon, getPokemon } = useContext(pokemonContext);

  let poke = newPokemon === "" ? "pikachu" : newPokemon;

  useEffect(() => {
    getPokemon(poke);
  }, [poke]);

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
