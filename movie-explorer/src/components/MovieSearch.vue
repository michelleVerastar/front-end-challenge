<!-- Search Text input and button for the movie search -->
<script setup lang="ts">
    import { ref } from "vue";
    import { useMovieStore } from '../stores/MovieStore';
    import { searchMovies } from "../services/OMDbAPIService";

    //access the store
    const movieStore = useMovieStore();
    //local data variables
    const query = ref("");

     // Search handler
    async function onSearch() {
        if (query.value.trim()) {
            movieStore.setSelectedMovie(null);
            movieStore.setLoading(true);
            movieStore.setErrorMessage(null);

            try {
                const result = await searchMovies(query.value.trim());

                if (result.Response === "True" && result.Search) {
                    movieStore.setMovies(result.Search);
                    movieStore.setErrorMessage(null);
                } else {
                    movieStore.setMovies([]);
                    movieStore.setErrorMessage(result.Error ?? "No results found");
                }
            } catch (err: any) {
                movieStore.setErrorMessage(err.message || "Failed to fetch movies");
                movieStore.setMovies([]);
            } finally {
                movieStore.setLoading(false);
            }

        }
    }

</script>

<template>
    <v-row 
        class="align-center" 
        justify="center"
    >
        <!-- Search input and button - wrapped together -->
         <v-col 
            cols="12" 
            md="8"
            lg="6" 
            class="d-flex justify-center gap-2"
        >
            <!-- Search input -->
            <v-text-field
                v-model="query"
                label="Search movies..."
                placeholder="Type movie title here..."
                class="flex-grow-1"
                outlined
                clearable
                @keyup.enter="onSearch"
            >
            <template #append-inner>
                <v-btn
                    color="primary"
                    outlined
                    class="ml-4"
                    @click="onSearch"
                >
                    Search
                </v-btn>
            </template>
        </v-text-field>  
         </v-col>
    </v-row>
</template>

<style scoped>
</style>
