import { createStore } from "vuex";

export default createStore({
  state: {
    pokemonList: { next: "", previous: "", results: [] },
    currentPage: 1,
  },
  getters: {
    pokemonList(state) {
      return state.pokemonList.results;
    },
    currentPage(state) {
      return state.currentPage;
    },
    nextPage(state) {
      return state.pokemonList.next;
    },
    previousPage(state) {
      return state.pokemonList.previous;
    },
  },
  mutations: {
    setPokemons(state, listOfPokemons) {
      state.pokemonList = listOfPokemons;
    },
    setPage(state, newPage) {
      state.currentPage = newPage;
    },
  },
  actions: { // Usar el offset para minimizar código y quitar al menos dos métodos.
    callAllPokemons(context) {
      return fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => context.commit("setPokemons", data))
        .catch((err) => console.log(err));
    },
    changePreviousPage(context) {
      return fetch(context.state.pokemonList.previous)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setPokemons", data);
        })
        .then((data) =>
          context.commit("setPage", context.state.currentPage - 1)
        )
        .catch((err) => console.log(err));
    },
    changeNextPage(context) {
      return fetch(context.state.pokemonList.next)
        .then((response) => response.json())
        .then((data) => context.commit("setPokemons", data))
        .then((data) =>
          context.commit("setPage", context.state.currentPage + 1)
        )
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
