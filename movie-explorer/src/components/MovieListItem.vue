<script setup lang="ts">
    import type { MovieSummary } from "../types/MovieSummary";

    defineProps<{
    movie: MovieSummary;
    }>();

    const emit = defineEmits<{ (e: "select", id: string): void }>();
</script>

<template>
    <div class="border rounded shadow p-2 cursor-pointer hover:bg-gray-100"
        @click="emit('select', movie.imdbID)"
    >
        <img :src="movie.Poster" alt="Poster" class="w-full h-64 object-cover mb-2" />
        <h2 class="font-bold">{{ movie.Title }}</h2>
        <p class="text-gray-600">{{ movie.Year }}</p>
    </div>
</template>
