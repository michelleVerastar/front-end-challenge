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
        class="mx-auto text-center"
        :subtitle="movie.Year"
        width="300"
        height="330"
        rounded="true"
        border="lg opacity-12"
    >
        <template v-slot:title>
            <span class="font-weight-black">{{ movie.Title }}</span>
        </template>
        <!-- Poster -->
        <v-img 
            :src="movie.Poster" 
            alt="Poster"
            max-height="200"
         ></v-img>

        <!-- Button -->
        <template v-slot:actions>
            <v-btn 
                block
                color="primary" 
                class="mr-4 mb-2"
                @click.stop="handleSelect(movie.imdbID)"
                text="See Details"
            ></v-btn>
        </template>
        
    </v-card>
</template>

<style scoped>
</style>
