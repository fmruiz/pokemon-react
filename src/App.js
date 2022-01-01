import React, { Fragment, useEffect } from 'react'
import PokemonImage from './components/PokemonImage'
import PokemonOptions from './components/PokemonOptions'
import PokemonState from './context/pokemonState'

const App = () => {
  return (
    <PokemonState>
      <h1>Who is this pokemon?</h1>
      <PokemonImage/>
      <PokemonOptions />
    </PokemonState>
  )
}

export default App

