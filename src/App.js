import React from 'react'
import PokemonImage from './components/PokemonImage'
import PokemonOptions from './components/PokemonOptions'
import PokemonSearch from './components/PokemonSearch'
import PokemonState from './context/pokemonState'

const App = () => {
  return (
    <PokemonState>
      <PokemonSearch />
      <PokemonImage/>
      <PokemonOptions />
    </PokemonState>
  )
}

export default App

