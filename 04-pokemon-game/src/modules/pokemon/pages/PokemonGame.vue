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
    <h3 class="capitalize m-5">{{ gameStatus }}</h3>

    <!--- Pokemon Picture --->
    <PokemonPicture
      :pokemon-id="randomPokemon.id!"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!--- Pokemon Options --->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus !== GameStatus.Playing"
      @selected-option="checkAnswer"
      :correct-answer="randomPokemon.id!"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonOptions: options,
  checkAnswer,
} = usePokemonGame();
</script>
