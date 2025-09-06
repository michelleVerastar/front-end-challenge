<!-- Popup with details of a specific movie that appears when clicking the See Details button -->
<script setup lang="ts">
    import type { MovieDetails } from "../types/MovieDetails";
    import { defineProps, defineEmits, ref, watch } from "vue";

    const props = defineProps<{
        dialogIsActive: boolean; // Controls the visibility of the modal
        movie: MovieDetails | null;        
    }>();

    // Note that vue3 automatically converts camelCase to kebab-case for emitted events so dialog-is-active links to dialogIsActive
    const emit = defineEmits<{
        (e: "update:dialog-is-active", value: boolean): void //For closing the modal
    }>();

    // Local state to control the modal visibility
    // Using the ref instead of prop directly then emitting is best practice - props should be immutable
    const isActive = ref(props.dialogIsActive);

    //watch for isActive change to trigger emit to close the dialog
    watch(
        () => props.dialogIsActive,
        (val) => (isActive.value = val)
    )
    watch(isActive, (val) => emit("update:dialog-is-active", val))
    
</script>

<template>
    <!-- Uses Vuetify v-dialog for movie details modal  -->
    <v-dialog 
        v-model="isActive" 
        max-width="600"
        persistent 
        scrollable
    >
        <!-- Uses vuetify v-card to neatly display the contents of the modal -->
        <v-card>        
            <!-- Title  -->
            <v-card-title class="text-center">
                <span class="text-h6 font-weight-bold">
                    {{ props.movie?.Title }} ({{ props.movie?.Year }})
                </span>
            </v-card-title>
        
            <!-- Movie details in the body -->
            <v-card-text>
                <!-- Poster iamge -->
                <v-img v-if="props.movie?.Poster" 
                    :src="props.movie.Poster"
                    max-height="300"
                    max-width="100%"
                    class="mb-4"
                    contain
                ></v-img>

                <!-- Movie Info - styled to split up the sections with dividers and weighted titles -->
                <v-divider class="my-2" /> 
                <v-row class="mb-2">
                    <v-col cols="4" class="font-weight-medium">Genre:</v-col>
                    <v-col cols="8">{{ props.movie?.Genre }}</v-col>
                </v-row>
                <v-divider class="my-2" />
                <v-row class="mb-2">
                    <v-col cols="4" class="font-weight-medium">Cast:</v-col>
                    <v-col cols="8">{{ props.movie?.Actors }}</v-col>
                </v-row>
                <v-divider class="my-2" />                
                <v-row class="mb-2">
                    <v-col cols="4" class="font-weight-medium">IMDb Rating:</v-col>
                    <v-col cols="8">{{ props.movie?.imdbRating }}</v-col>
                </v-row>
                <v-divider class="my-2" /> 

                <!-- Plot - styled to space out the paragraph to make it readable -->
                 <v-row>
                    <v-col cols="12">
                        <p class="mb-0"><strong>Plot:</strong></p>
                        <p class="text-body-2" style="white-space: pre-line;">{{ props.movie?.Plot }}</p>
                    </v-col>
                </v-row>
            </v-card-text>  
            
            <!-- Close button --> 
             <v-card-actions class="justify-center">
                <v-btn 
                    @click="isActive = false"
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
