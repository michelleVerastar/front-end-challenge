/** axios is for http requests in node.js - parses json and allows simpler queries than the native fetch method */
import axios from "axios";

/**types */
import type { MovieSearchResponse } from "../types/MovieSearchResponse";  
import type { MovieDetails } from "../types/MovieDetails";

const apiKey = "260ec08a"; // 🔑 replace with your OMDb key
const baseUrl = "https://www.omdbapi.com/";

/**Get list of results from searching for a title - only returns short summary */
export const searchMovies = async (title: string): Promise<MovieSearchResponse> => {
  const res = await axios.get<MovieSearchResponse>(baseUrl, {
    params: { apikey: apiKey, s: title }
  });
  return res.data;
};

/** Get full details of a specific result from the search */
export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const res = await axios.get<MovieDetails>(baseUrl, {
    params: { apikey: apiKey, i: id, plot: "full" }
  });
  return res.data;
};
