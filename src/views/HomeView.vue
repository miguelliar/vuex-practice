<template>
  <div class="home">
    <PokeFinder></PokeFinder>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PokeFinder from "@/components/PokeFinder.vue"; // @ is an alias to /src

@Options({
  components: {
    PokeFinder,
  },
})
export default class HomeView extends Vue {}
</script>
