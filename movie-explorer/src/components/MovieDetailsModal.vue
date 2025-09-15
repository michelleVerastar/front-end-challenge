<!-- Popup with details of a specific movie that appears when clicking the See Details button -->
<script setup lang="ts">
    import { useMovieStore } from '../stores/MovieStore';

    const movieStore = useMovieStore(); 
    
</script>

<template>
    <!-- Uses Vuetify v-dialog for movie details modal  -->
    <v-dialog 
        v-model="movieStore.showMovieDetails" 
        max-width="600"
        persistent 
        scrollable
    >
        <!-- Uses vuetify v-card to neatly display the contents of the modal -->
        <v-card
            rounded="true"
             border="lg opacity-12">        
            <!-- Title  -->
            <v-card-title class="text-center">
                <span class="text-h6 font-weight-bold">
                    {{ movieStore.selectedMovie?.Title }} ({{ movieStore.selectedMovie?.Year }})
                </span>
            </v-card-title>
        
            <!-- Movie details in the body -->
            <v-card-text>
                <!-- Poster iamge -->
                <v-img v-if="movieStore.selectedMovie?.Poster" 
                    :src="movieStore.selectedMovie.Poster"
                    max-height="300"
                    max-width="100%"
                    class="mb-4"
                    contain
                ></v-img>

                <!-- Movie Info - styled to split up the sections with dividers and weighted titles -->
                <v-divider class="my-2" /> 
                <v-row class="mb-2">
                    <v-col cols="4" class="font-weight-medium">Genre:</v-col>
                    <v-col cols="8">{{ movieStore.selectedMovie?.Genre }}</v-col>
                </v-row>
                <v-divider class="my-2" />
                <v-row class="mb-2">
                    <v-col cols="4" class="font-weight-medium">Cast:</v-col>
                    <v-col cols="8">{{ movieStore.selectedMovie?.Actors }}</v-col>
                </v-row>
                <v-divider class="my-2" />                
                <v-row class="mb-2">
                    <v-col cols="4" class="font-weight-medium">IMDb Rating:</v-col>
                    <v-col cols="8">{{ movieStore.selectedMovie?.imdbRating }}</v-col>
                </v-row>
                <v-divider class="my-2" /> 

                <!-- Plot - styled to space out the paragraph to make it readable -->
                 <v-row>
                    <v-col cols="12">
                        <p class="mb-0"><strong>Plot:</strong></p>
                        <p class="text-body-2" style="white-space: pre-line;">{{ movieStore.selectedMovie?.Plot }}</p>
                    </v-col>
                </v-row>
            </v-card-text>  
            
            <!-- Close button --> 
             <v-card-actions class="justify-center">
                <v-btn 
                    @click="movieStore.closeModal()"
                    color="primary"
                >    
                    Close
                </v-btn>
             </v-card-actions>           
        </v-card>
    </v-dialog>
</template>

<style scoped>   
</style>
