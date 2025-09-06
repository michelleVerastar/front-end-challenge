<!-- The main app component that controls the behaviour of the rest of the components -->
<script lang="ts" setup>
    import { ref } from "vue";
    import MovieSearch from "./components/MovieSearch.vue";
    import MovieList from "./components/MovieList.vue";
    import type { MovieSummary } from "./types/MovieSummary";
    import type { MovieDetails } from "./types/MovieDetails";
    import { searchMovies, getMovieDetails } from "./services/OMDbAPIService";
    import MovieDetailsModal from "./components/MovieDetailsModal.vue";

    // State
    const movies = ref<MovieSummary[]>([]);
    const selectedMovie = ref<MovieDetails | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);
    const showMovieDetails = ref(false);

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
            openModal(details);
        } catch (err: any) {
            error.value = err.message || "Failed to fetch movie details";
        } finally {
            loading.value = false;
        }
    }

    function openModal(movie: MovieDetails) {
        selectedMovie.value = movie
        showMovieDetails.value = true
    }
</script>

<template>
    <div class="max-w-5xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6 text-center">🎬 Movie Explorer</h1>

        <!-- Search bar -->
        <MovieSearch @search="handleSearch" />

        <!-- Loading / error messages -->
        <div v-if="loading" class="text-gray-400 mt-4 text-center">Loading...</div>
        <div v-else-if="error" class="text-red-500 mt-4 text-center">{{ error }}</div>

        <!-- Movie list -->
        <MovieList
            v-if="movies.length > 0"
            :movies="movies"
            @select="handleSelect"
        />

        <!-- Selected movie details -->
        <MovieDetailsModal
            v-model:dialog-is-active="showMovieDetails"
            :movie="selectedMovie"     
          />
    </div>
</template>

<style>
/* optional global styling */
</style>
