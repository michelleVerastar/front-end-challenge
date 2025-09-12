<!-- The top level component -->
<script lang="ts" setup>
    import MovieSearch from "./components/MovieSearch.vue";
    import MovieList from "./components/MovieList.vue";
    import MovieDetailsModal from "./components/MovieDetailsModal.vue";
    import { useMovieStore } from './stores/MovieStore';

    const movieStore = useMovieStore(); 
    
</script>

<template>
    <v-container 
        fluid 
        class="py-6 text-center" 
        style="max-width: 100%;"
    >
        <!-- Title -->
        <h1 class="text-h3 font-weight-bold mb-4">🎬 Movie Explorer</h1>        

        <!-- Search -->
        <MovieSearch/>

        <!-- Loading / error messages -->
        <v-alert 
            v-if="movieStore.loading"
            type="info"  
            class="my-4">Loading...
        </v-alert>

        <v-alert 
            v-else-if="movieStore.errorMessage" 
            type="error"
            class="my-4">
            {{ movieStore.errorMessage }}
        </v-alert >

        <!-- Movie list -->
        <MovieList v-if="movieStore.movies.length > 0" />

        <!-- Selected movie details -->
        <MovieDetailsModal v-if="movieStore.showMovieDetails"/>
    </v-container>
</template>

<style>
    /* optional global styling */

    /* -- */
    :root {
        --v-font-family: "Avenir, Helvetica, Arial, sans-serif";
    }
</style>
