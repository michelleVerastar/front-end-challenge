<!-- Component that contains the list results from the movie search -->
<script setup lang="ts">
    import MovieListItem from "./MovieListItem.vue";
    import { useMovieStore } from '../stores/MovieStore';

    const movieStore = useMovieStore();

    async function changePage(newPage: number) {
        movieStore.setPageNumber(newPage);
        if (movieStore.query.trim()) {
            await  movieStore.onSearch()
        }
    }
</script>

<template>
    <v-sheet 
        rounded="true"
        class="mx-auto"
    >
        <v-row>
            <v-col
                v-for="movie in movieStore.movies"
                :key="movie.imdbID"
                cols="12"  
                md="3"
            >
                <MovieListItem
                    :movie="movie"
                    class="fixed-height ma-0"
                />
            </v-col>
        </v-row>

        <v-pagination 
            v-model="movieStore.pageNumber"
            :length="movieStore.totalResults"   
            :total-visible="10"
            @update:model-value="changePage"         
        ></v-pagination>
    </v-sheet>
</template>

<style scoped>
</style>
