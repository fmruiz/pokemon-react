import React, { Fragment, useEffect } from 'react'
import PokemonImage from './components/PokemonImage'
import PokemonOptions from './components/PokemonOptions'

const App = () => {
  return (
    <Fragment>
      <h1>Who is this pokemon?</h1>
      <PokemonImage />
      <PokemonOptions />
    </Fragment>
  )
}

export default App

