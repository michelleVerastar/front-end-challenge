<!-- The top level component -->
<script lang="ts" setup>
    import MovieSearch from "./components/MovieSearch.vue";
    import MovieList from "./components/MovieList.vue";
    import MovieDetailsModal from "./components/MovieDetailsModal.vue";
    import { useMovieStore } from './stores/MovieStore';
    import movieImage from './assets/movieImage.png';
    import { shallowRef } from 'vue'
    import userIcon from './assets/userIcon.png';

    const movieStore = useMovieStore(); 
    const drawer = shallowRef(false)

    const items = [
        {
            text: 'Movie Explorer',
        },
        {
            text: 'About',
        }
    ]
    
</script>

<template>
    <v-layout>
        <v-app-bar class="px-md-4" color="surface-variant" flat>
            <template #prepend>
                <v-app-bar-nav-icon
                    v-if="$vuetify.display.smAndDown"
                    @click="drawer = !drawer"
                />
            </template>

            <v-img
                class="me-sm-8"
                max-width="40"
                :src= "movieImage"
            />

            <template v-if="$vuetify.display.mdAndUp">
                <v-btn
                    v-for="(item, i) in items"
                    :key="i"
                    :active="i === 0"
                    class="me-2 text-none"
                    slim
                    v-bind="item"
                />
            </template>

             <v-spacer />

             <template #append>
                <v-btn
                    class="ms-1 opacity-60"
                    icon="mdi-bell-outline"
                />

                <v-btn class="ms-1" icon>
                    <v-avatar :image="userIcon" />

                    <v-menu activator="parent" origin="top">
                        <v-list>
                            <v-list-item link title="Update profile" />
                            <v-list-item link title="Sign out" />
                        </v-list>
                    </v-menu>
                </v-btn>
            </template>
        </v-app-bar>

        <v-main>

            <div class="pa-4">
                <v-sheet
                    border="dashed md"
                    color="surface-light"
                    height="500"
                    rounded="lg"
                    width="100%"
                >
                    <h2 class="text-h4 font-weight-bold text-center my-4">🎬 Movie Explorer</h2>
                    <!-- Search -->
                    <MovieSearch/>
                    <!-- Loading / error messages -->
                    <v-alert 
                        v-if="movieStore.loading"
                        type="info"  
                        class="my-4">Loading...
                    </v-alert>

                    <v-alert 
                        v-else-if="movieStore.errorMessage" 
                        type="error"
                        class="my-4">
                        {{ movieStore.errorMessage }}
                    </v-alert >

                    <!-- Movie list -->
                    <MovieList v-if="movieStore.movies.length > 0" />

                    <!-- Selected movie details -->
                    <MovieDetailsModal v-if="movieStore.showMovieDetails"/>
                </v-sheet>
            </div>
        </v-main>          
    </v-layout>    
</template>

<style>
    /* optional global styling */

    /* -- */
    :root {
        --v-font-family: "Avenir, Helvetica, Arial, sans-serif";
    }
</style>
