export interface MovieSearchResult {
  id: string;
  title: string;
  year: number;
  poster: string;
}

export const searchMovies = async (query: string): Promise<MovieSearchResult[]> => {
  // In a real app, this would call your backend, which would call the IMDB API
  // For now, we'll just simulate a response
  console.log(`Searching for: ${query}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data
  return [
    { id: 'tt0113568', title: 'ghost in the shell', year: 1995, poster: '' },
    { id: 'tt0103064', title: 'terminator 2: judgment day', year: 1991, poster: '' },
    { id: 'tt0133093', title: 'the matrix', year: 1999, poster: '' },
  ];
};

export const getMovieDetails = async (id: string) => {
  // In a real app, this would fetch movie details from IMDB
  console.log(`Fetching details for movie: ${id}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data
  return {
    id,
    title: 'ghost in the shell',
    year: 1995,
    director: 'mamoru oshii',
    runtime: 83,
    plot: 'A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.',
    poster: '',
  };
};

