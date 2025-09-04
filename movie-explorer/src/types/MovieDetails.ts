/** Interface for API call to get the full details of a specific title */ 
export interface MovieDetails {
    Title: string;
    Year: string;
    Genre: string;
    Plot: string;
    Actors: string;
    imdbRating: string;
    Poster: string;
}