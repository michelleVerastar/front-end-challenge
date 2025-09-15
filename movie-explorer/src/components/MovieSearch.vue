<!-- Search Text input and button for the movie search -->
<script setup lang="ts">
    import { ref } from "vue";
    import { useMovieStore } from '../stores/MovieStore';  
    //access the store
    const movieStore = useMovieStore(); 

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
                v-model="movieStore.query"
                label="Search movies..."
                placeholder="Type movie title here..."
                class="flex-grow-1"
                outlined
                clearable
                @update:model-value="movieStore.setQuery"
                @keyup.enter="movieStore.onSearch()"
            >
            <template #append-inner>
                <v-btn
                    color="primary"
                    outlined
                    class="ml-4"
                    @click="movieStore.onSearch()"
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
