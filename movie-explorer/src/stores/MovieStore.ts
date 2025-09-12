import { defineStore } from 'pinia'
import { ref} from 'vue'
import type { MovieSummary } from "../types/MovieSummary";
import type { MovieDetails } from "../types/MovieDetails";

/**Pinia store is for any functions or data items that need to be used in more than one component. 
 * Avoids having to keep track of emits and ensures the state is the same everywhere */
export const useMovieStore = defineStore('movieStore', () => {
    // ---- States ---- //
    //Put data items here that need to be used in multiple components and must be the same throughout components
    const movies = ref<MovieSummary[]>([]);
    const selectedMovie = ref<MovieDetails | null>(null);
    const loading = ref(false);
    const errorMessage = ref<string | null>(null);
    const showMovieDetails = ref(false);

    // ---- Getters ---- //
    //Put computed properties here if needed in multiple components and must be the same throughout components

    // ---- Setters ---- //
    //Put functions here that set states defined above in states section.
    function setLoading(value: boolean) {
        loading.value = value
    }
    function setErrorMessage(message: string | null) { 
        errorMessage.value = message
    }

    function setMovies(moviesList: MovieSummary[]) {
        movies.value = moviesList
    }

    function setSelectedMovie(movie: MovieDetails | null) {
        selectedMovie.value = movie
    }

    function openModal(movie: MovieDetails) {
        selectedMovie.value = movie
        showMovieDetails.value = true
    }

    function closeModal() {
        showMovieDetails.value = false
        selectedMovie.value = null
    }

    // ---- Global Functions ---- //
    //Put functions here that need to be used in multiple components.       

    // Everything returned here is exposed to components
    return {
        loading,
        errorMessage,
        movies,
        selectedMovie,   
        showMovieDetails,
        setLoading,
        setErrorMessage,
        setMovies,
        setSelectedMovie,
        openModal,
        closeModal
    }
})