<template>
  <div class="poke-container">
    <div class="poke-search">
      <input type="text" placeholder="Search by name..." />
    </div>
    <PokeTable></PokeTable>
  </div>
</template>

<script>
import PokeTable from "@/components/PokeTable";
export default {
  name: "PokeFinder",
  components: { PokeTable },
};
</script>

<style scoped></style>
