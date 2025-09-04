import type { MovieSummary } from "./MovieSummary";

/** Interface for the results of an API search (with s parameter in url) to get a list result and any errors
 * Must have a "Search" properry to catch the list returned by the OMDb API - see http://www.omdbapi.com/
*/
export interface MovieSearchResponse {
    Search?: MovieSummary[];
    totalResults?: string;
    Response: string;
    Error?: string;
}