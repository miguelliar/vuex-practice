<template>
  <div class="poke-table">
    <tr>
      <th>Name</th>
    </tr>
    <tr v-for="pokemon in pokemonList" :key="pokemon.name">
      <td>{{ pokemon.name }}</td>
    </tr>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PokeTable",
  computed: {
    ...mapGetters(["pokemonList"]),
  },
  methods: {
    ...mapActions(["callAllPokemons"]),
  },
  created() {
    this.callAllPokemons();
  },
};
</script>

<style scoped></style>
