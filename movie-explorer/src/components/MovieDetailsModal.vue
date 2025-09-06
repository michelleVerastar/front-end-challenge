<!-- Popup with details of a specific movie that appears when clicking the show details button -->
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
    <v-dialog v-model="isActive" max-width="600">
        <!-- Uses vuetify v-card to neatly display the contents of the modal -->
        <v-card>
            <v-card-title>
                <span>{{ props.movie?.Title }} ({{ props.movie?.Year }})</span>
                <v-btn icon="mdi-close" variant="text" @click="isActive = false"></v-btn>
            </v-card-title>
        
            <v-card-text>
                <v-img v-if="props.movie?.Poster" :src="props.movie.Poster"/>
                <p><strong>Genre:</strong> {{ props.movie?.Genre }}</p>
                <p><strong>Cast:</strong> {{ props.movie?.Actors }}</p>
                <p><strong>IMDb Rating:</strong> {{ props.movie?.imdbRating }}</p>
                <p><strong>Plot:</strong> {{ props.movie?.Plot }}</p>
            </v-card-text>      
        </v-card>
    </v-dialog>
</template>

<style scoped>   
</style>
