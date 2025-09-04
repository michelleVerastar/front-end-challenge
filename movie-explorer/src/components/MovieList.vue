<script setup lang="ts">
import type { MovieSummary } from "../types/MovieSummary";
import MovieListItem from "./MovieListItem.vue";

defineProps<{
  movies: MovieSummary[];
}>();

const emit = defineEmits<{ (e: "select", id: string): void }>();
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MovieListItem
            v-for="m in movies"
            :key="m.imdbID"
            :movie="m"
            @select="id => emit('select', id)"
        />
    </div>
</template>
