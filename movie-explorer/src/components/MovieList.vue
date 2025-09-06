<!-- Component that contains the list results from the movie search -->
<script setup lang="ts">
    import type { MovieSummary } from "../types/MovieSummary";
    import MovieListItem from "./MovieListItem.vue";

    defineProps<{
        movies: MovieSummary[];
    }>();

    const emit = defineEmits<{ (e: "select", imdbID: string): void }>();
</script>

<template>
    <v-container fluid>
    <v-row dense>
        <v-col
            v-for="movie in movies"
            :key="movie.imdbID"
            cols="12"     
            md="6"        
            class="mb-4"
        >
            <MovieListItem
                :movie="movie"
                @select="imdbID => emit('select', imdbID)"
            />
        </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
