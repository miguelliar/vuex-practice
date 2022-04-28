<template>
  <div class="poke-container">
    <img
      class="poke-logo"
      src="../assets/Pokémon_logo.png"
      alt="Pokemon logo"
    />
    <!--
    <div class="poke-search">
      <input type="text" placeholder="Search by name..." />
    </div>
    -->
    <PokeTable></PokeTable>
    <div class="page-index">
      <button v-if="previousPage" @click="this.changePreviousPage()">
        {{ this.currentPage - 1 }}
      </button>
      <p>{{ this.currentPage }}</p>
      <button v-if="nextPage" @click="this.changeNextPage()">
        {{ this.currentPage + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
import PokeTable from "@/components/PokeTable";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PokeFinder",
  components: { PokeTable },
  computed: {
    ...mapGetters(["nextPage", "previousPage", "currentPage"]),
  },
  methods: {
    ...mapActions(["callAllPokemons", "changeNextPage", "changePreviousPage"]),
  },
  created() {
    this.callAllPokemons();
  },
};
</script>

<style scoped>
.poke-logo {
  width: 400px;
}
</style>
