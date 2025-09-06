<!-- Component for a single list item in the movie search results -->
<script setup lang="ts">
    import type { MovieSummary } from "../types/MovieSummary";

    defineProps<{
        movie: MovieSummary;
    }>();

    const emit = defineEmits<{ (e: "select", imdbID: string): void }>();
</script>

<template>
    <v-card 
        class="d-flex flex-row align-center"
        elevation="2"
        rounded
    >
        <!-- Poster -->
        <v-img 
            :src="movie.Poster" 
            alt="Poster"
            max-width="100"
         ></v-img>

        <!-- Title + Year -->
        <v-card-text 
            class="flex-grow-1 align-center"
        >
            <h2>{{ movie.Title }}  ,   {{ movie.Year }}</h2>
        </v-card-text>

        <!-- Button -->
         <v-card-actions>
            <v-btn 
                color="primary" 
                class="mr-4"
                @click.stop="emit('select', movie.imdbID)"
            >
                See Details
            </v-btn>
         </v-card-actions>
        
    </v-card>
</template>

<style scoped>
</style>
