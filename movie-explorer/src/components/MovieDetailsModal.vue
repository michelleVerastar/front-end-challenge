<script setup lang="ts">
    import type { MovieDetails } from "../types/MovieDetails";
    import { defineProps, defineEmits } from "vue";

    defineProps<{
        movie: MovieDetails;
    }>();

    const emit = defineEmits<{
        (e: "close"): void;
    }>();

    function close() {
        emit("close");
    }
</script>

<template>
    <div class="modal-backdrop" @click.self="close()">
        <div class="modal-content">
            <button class="modal-close" @click="close()">✕</button>
            <img :src="movie.Poster" alt="Poster" class="poster" />
            <h2>{{ movie.Title }} ({{ movie.Year }})</h2>
            <p><strong>Genre:</strong> {{ movie.Genre }}</p>
            <p><strong>Cast:</strong> {{ movie.Actors }}</p>
            <p><strong>IMDb Rating:</strong> {{ movie.imdbRating }}</p>
            <p><strong>Plot:</strong> {{ movie.Plot }}</p>
        </div>
    </div>
</template>

<style scoped>
    .modal-backdrop {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    .modal-content {
        padding: 2rem;
        border-radius: 0.5rem;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        background-color: var(--button-bg);
    }
    .modal-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        font-size: 1.5rem;
        cursor: pointer;
        border: none;
    }
    .poster {
        max-height: 300px;
        object-fit: cover;
        margin-bottom: 1rem;
    }
</style>
