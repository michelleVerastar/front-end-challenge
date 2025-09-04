<script lang="ts" setup>
import { ref } from "vue";
import MovieSearch from "./components/MovieSearch.vue";
import MovieList from "./components/MovieList.vue";
import MovieDetails from "./components/MovieDetails.vue";
import type { MovieSummary } from "./types/MovieSummary";
import type { MovieDetails as MovieDetailsType } from "./types/MovieDetails";
import { searchMovies, getMovieDetails } from "./services/OMDbAPIService";

// State
const movies = ref<MovieSummary[]>([]);
const selectedMovie = ref<MovieDetailsType | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

// Search handler
async function handleSearch(query: string) {
  selectedMovie.value = null;
  loading.value = true;
  error.value = null;

  try {
    const result = await searchMovies(query);

    if (result.Response === "True" && result.Search) {
      movies.value = result.Search;
      error.value = null;
    } else {
      movies.value = [];
      error.value = result.Error ?? "No results found";
    }
  } catch (err: any) {
    error.value = err.message || "Failed to fetch movies";
    movies.value = [];
  } finally {
    loading.value = false;
  }
}

// Movie select handler
async function handleSelect(imdbID: string) {
  loading.value = true;
  error.value = null;
  selectedMovie.value = null;

  try {
    const details = await getMovieDetails(imdbID);
    selectedMovie.value = details;
  } catch (err: any) {
    error.value = err.message || "Failed to fetch movie details";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">🎬 Movie Explorer</h1>

    <!-- Search bar -->
    <MovieSearch @search="handleSearch" />

    <!-- Loading / error messages -->
    <div v-if="loading" class="text-gray-600">Loading...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>

    <!-- Movie list -->
    <MovieList
      v-if="movies.length > 0"
      :movies="movies"
      @select="handleSelect"
    />

    <!-- Selected movie details -->
    <MovieDetails
      v-if="selectedMovie"
      :details="selectedMovie"
      :loading="loading"
      :error="error"
    />
  </div>
</template>

<style>
/* optional global styling */
</style>
