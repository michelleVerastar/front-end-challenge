<script lang="ts" setup>
    import MovieSearch from "../components/MovieSearch.vue";
    import MovieList from "../components/MovieList.vue";
    import MovieDetailsModal from "../components/MovieDetailsModal.vue";
    import { useMovieStore } from '../stores/MovieStore';
    const movieStore = useMovieStore(); 
    
</script>

<template>
    <v-main>
        <h2 class="text-h4 font-weight-bold text-center my-4">Movie Search</h2>
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
    </v-main>    
</template>