<script setup lang="ts">
import type { MovieDetails } from "../types/MovieDetails";

defineProps<{
  details: MovieDetails | null;
  loading: boolean;
  error: string | null;
}>();
</script>

<template>
  <div class="mt-6">
    <div v-if="loading" class="text-gray-600">Loading details...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else-if="details" class="border rounded p-4 shadow">
      <h2 class="text-xl font-bold mb-2">{{ details.Title }} ({{ details.Year }})</h2>
      <p class="italic mb-2">Genre: {{ details.Genre }}</p>
      <p class="mb-2">Actors: {{ details.Actors }}</p>
      <p class="mb-2">IMDb Rating: {{ details.imdbRating }}</p>
      <p class="mb-4">{{ details.Plot }}</p>
      <img :src="details.Poster" alt="Poster" class="w-48" />
    </div>
  </div>
</template>
