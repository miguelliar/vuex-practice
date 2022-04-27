import { createStore } from "vuex";

export default createStore({
  state: {
    pokemonList: [],
  },
  getters: {
    pokemonList(state) {
      return state.pokemonList;
    },
  },
  mutations: {
    setPokemons(state, listOfPokemons) {
      state.pokemonList = listOfPokemons;
    },
  },
  actions: {
    callAllPokemons(context) {
      return fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => context.commit("setPokemons", data.results))
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
