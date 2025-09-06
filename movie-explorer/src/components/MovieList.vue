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
    <div class="movie-list">
        <MovieListItem
            v-for="m in movies"
            :key="m.imdbID"
            :movie="m"
            @select="imdbID => emit('select', imdbID)"
        />
    </div>
</template>

<style scoped>
    .movie-list {
        display: flex;
        flex-direction: column;
    }
</style>
