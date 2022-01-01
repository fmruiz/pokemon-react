import * as types from "../types";

export default (state, action) => {
  switch (action.type) {
    case types.NEW_POKEMON:
      return {
        ...state,
        newPokemon: action.payload,
      };
    case types.GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};
