import { defineStore } from 'pinia'
import { ref, computed} from 'vue'
import type { MovieSummary } from "../types/MovieSummary";
import type { MovieDetails } from "../types/MovieDetails";
import { searchMovies } from "../services/OMDbAPIService";


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
    const pageNumber = ref(1);
    const totalResults = ref(0);
    const query = ref("");

    // ---- Getters / Get and set computed---- //
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

    function setPageNumber(page: number) {
        pageNumber.value = page
    }

    function setTotalResults(total: number) {
        totalResults.value = Math.ceil(total /10) // OMDb API returns 10 results per page - convert to number of pages
    }

    function setQuery(q: string) {
        query.value = q
    }

    // ---- Global Functions ---- //
    //Put functions here that need to be used in multiple components.
    
    // Search handler
    async function onSearch() {
        if (query.value.trim()) {
            setSelectedMovie(null);
            setLoading(true);
            setErrorMessage(null);

            try {
                const result = await searchMovies(query.value.trim(), pageNumber.value);

                if (result.Response === "True" && result.Search) {
                    setTotalResults(parseInt(result.totalResults || "0", 10));
                    setMovies(result.Search);
                    setErrorMessage(null);
                } else {
                    setMovies([]);
                    setErrorMessage(result.Error ?? "No results found");
                }
            } catch (err: any) {
                setErrorMessage(err.message || "Failed to fetch movies");
                setMovies([]);
            } finally {
                setLoading(false);
            }
        }
    }       

    // Everything returned here is exposed to components
    return {
        loading,
        errorMessage,
        movies,
        selectedMovie,   
        showMovieDetails,
        pageNumber,
        totalResults,
        query,
        setLoading,
        setErrorMessage,
        setMovies,
        setSelectedMovie,
        openModal,
        closeModal,
        setPageNumber,
        setTotalResults,
        setQuery,
        onSearch
    }
})