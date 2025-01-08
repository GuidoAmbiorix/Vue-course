<template>
  <section
    v-if="isLoading || !randomPokemon || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>

  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="">¿Quien es este pokemon?</h1>
    <h3 class="m-3">{{ randomPokemon }}</h3>

    <!--- Pokemon Picture --->
    <PokemonPicture :pokemon-id="randomPokemon.id!" />

    <!--- Pokemon Options --->
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { randomPokemon, isLoading } = usePokemonGame();
</script>
