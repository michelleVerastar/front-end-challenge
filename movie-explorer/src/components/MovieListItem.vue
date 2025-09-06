<!-- Component for a single list item in the movie search results -->
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
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .movie-row:hover {
        background-color: var(--row-hover);
    }

    /* Poster scaled to ~50% of previous height to make thumbnails */
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
    }

    /* Details button */
    .details-btn {
        padding: 0.5rem 1rem;
        font-weight: 500;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
        color: var(--button-text);
        background-color: var(--button-bg);
    }
    .details-btn:hover {
        background-color: var(--link-hover);
    }
</style>
