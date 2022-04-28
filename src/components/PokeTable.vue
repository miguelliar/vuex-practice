<template>
  <div class="poke-table">
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr v-for="pokemon in pokemonList" :key="pokemon.name">
        <td>{{ pokemon.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PokeTable",
  computed: {
    ...mapGetters(["pokemonList"]),
  },
};
</script>

<style scoped>
.poke-table > table {
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  text-align: center;
}
</style>
