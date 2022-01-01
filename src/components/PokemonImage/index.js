import React, { useContext, useEffect } from "react";
import pokemonContext from "../../context/pokemonContext";

const PokemonImage = () => {
  const { pokemon, getPokemon } = useContext(pokemonContext);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <img
        src={
          pokemon
            ? pokemon.sprites.other.home.front_default
            : null
        }
      />
    </div>
  );
};

export default PokemonImage;
