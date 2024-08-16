export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Director?: string;
  Actors?: string;
  Plot?: string;
  imdbRating?: string;
}

export interface SearchResult {
  Response: string;
  Search: Movie[];
  totalResults: string;
  Error?: string;
}
