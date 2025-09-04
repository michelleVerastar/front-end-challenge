import type { MovieSummary } from "./MovieSummary";

/** Interface for the results of an API search (with s parameter in url) to get a list result and any errors*/
export interface MovieSearchResponse {
    SearchResults?: MovieSummary[];
    totalResults?: string;
    Response: string;
    Error?: string;
}