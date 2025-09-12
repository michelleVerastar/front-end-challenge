<!-- Component for a single list item in the movie search results -->
<script setup lang="ts">
    import type { MovieSummary } from "../types/MovieSummary";
    import { useMovieStore } from '../stores/MovieStore';
    import { getMovieDetails } from "../services/OMDbAPIService";

    defineProps<{
        movie: MovieSummary;
    }>();

    const movieStore = useMovieStore();

     // Movie select handler
    async function handleSelect(imdbID: string) {
        movieStore.setLoading(true);
        movieStore.setErrorMessage(null);
        movieStore.setSelectedMovie(null);

        try {
            //call the API
            const details = await getMovieDetails(imdbID);
            movieStore.openModal(details);
        } catch (err: any) {
            movieStore.setErrorMessage("Failed to fetch movie details");
        } finally {
            movieStore.setLoading(false);
        }
    }

</script>

<template>
    <v-card 
        class="d-flex flex-row align-center border-sm border-grey"
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
            <h2> {{ movie.Title }} <span class="mr-2"> , </span> {{ movie.Year }}</h2>
        </v-card-text>

        <!-- Button -->
         <v-card-actions>
            <v-btn 
                color="primary" 
                class="mr-4"
                @click.stop="handleSelect(movie.imdbID)"
            >
                See Details
            </v-btn>
         </v-card-actions>
        
    </v-card>
</template>

<style scoped>
</style>
