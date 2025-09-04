import type { MovieSearchItem } from "./MovieSearchItem";

/** Interface for the results of an API search (with s parameter in url) to get a list result*/
export interface MovieSearchResponse {
    Results?: MovieSearchItem[];
    totalResults?: string;
    Response: string;
    Error?: string;
}