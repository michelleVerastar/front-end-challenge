<script setup lang="ts">
    import type { MovieSummary } from "../types/MovieSummary";

    defineProps<{
        movie: MovieSummary;
    }>();

    const emit = defineEmits<{ (e: "select", imdbID: string): void }>();
</script>

<template>
    <div class="movie-row" @click="emit('select', movie.imdbID)">
        <!-- Poster -->
        <img :src="movie.Poster" alt="Poster" class="poster" />

        <!-- Title + Year -->
        <div class="info">
            <h2>{{ movie.Title }}, {{ movie.Year }}</h2>
        </div>

        <!-- Button -->
        <button class="details-btn" @click.stop="emit('select', movie.imdbID)">
            See Details
        </button>
    </div>
</template>

<style scoped>
    .movie-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #444;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .movie-row:hover {
        background-color: #333; /* Adjust for dark/light mode if needed */
    }

    /* Poster scaled to ~50% of previous height */
    .poster {
        width: 80px;
        height: auto;
        object-fit: cover;
        margin-right: 1rem;
        flex-shrink: 0;
    }

    /* Title + Year */
    .info {
        flex: 1;
        text-align: left;
        color: #fff;
    }

    /* Details button */
    .details-btn {
        background-color: #646cff; /* override global button */
        color: #fff;
        padding: 0.5rem 1rem;
        font-weight: 500;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .details-btn:hover {
        background-color: #535bf2;
    }
</style>
