import { useEffect, useState } from "react";
import { nowPlayingMoviesApi, popularMoviesApi, topRatedMoviesApi } from "../../../apiClient/movieApis";

export const useHome = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
    const [popularMovies, setPopularMovies] = useState<any[]>([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);

    useEffect(()=> {
        const fetchMovies = async () => {
            try {
                const [topRatedResponse, popularResponse, nowPlayingResponse] = await Promise.all( [
                    topRatedMoviesApi(),
                    popularMoviesApi(),
                    nowPlayingMoviesApi()
                ])
                setTopRatedMovies( JSON.parse(topRatedResponse).results);
                setPopularMovies( JSON.parse(popularResponse).results);
                setNowPlayingMovies( JSON.parse( nowPlayingResponse).results);
            } catch (error) {
                console.log("Error fetching movies:", error);
            }
        }
    
        fetchMovies();
        
    }, [])

    return {topRatedMovies, popularMovies, nowPlayingMovies};
}