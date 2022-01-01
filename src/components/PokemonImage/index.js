import React, { useContext } from 'react'
import pokemonContext from '../../context/pokemonContext'

const PokemonImage = () => {
    const {pokemon} = useContext(pokemonContext)

    return (
        <div>
            {pokemon}
        </div>
    )
}

export default PokemonImage
