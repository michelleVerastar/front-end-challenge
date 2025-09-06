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
    <v-container 
        fluid 
        class="pa-0"
    >
        <v-row 
            dense 
            class="ma-0" 
            style="row-gap: 0;"
            no-gutters
        >
            <v-col
                v-for="movie in movies"
                :key="movie.imdbID"
                cols="12"
                md="6"
                class="pa-0"
            >
                <MovieListItem
                    :movie="movie"
                    class="fixed-height ma-0"
                    @select="id => emit('select', id)"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .fixed-height {
        height: 150px; /* or any desired height */
        overflow: hidden; /* prevent content overflow */
    }
</style>
