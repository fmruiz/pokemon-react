import React, { useContext, useState } from "react";
import pokemonContext from "../../context/pokemonContext";
import { ContainerForm } from "./styles";

const PokemonSearch = () => {
  const [pokemonSearch, setPokemonSearch] = useState("");

  const { newPokemonFn } = useContext(pokemonContext);

  const handleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newPokemonFn(pokemonSearch);
  };

  return (
    <ContainerForm>
      <h1>Pokemon gallery</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search your favourite pokemon..."
          onChange={handleChange}
          value={pokemonSearch}
        />
        <button type="submit">Search!</button>
      </form>
    </ContainerForm>
  );
};

export default PokemonSearch;
