import { useEffect, useState } from "react";
import { nowPlayingMoviesApi, popularMoviesApi, topRatedMoviesApi } from "../../../apiClient/movieApis";
import { useAtomValue } from "jotai";
import { getAdultContentAtom } from "../../../store/slices/ProfileSettingSlicer";

export const useHome = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
    const [popularMovies, setPopularMovies] = useState<any[]>([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
    const adultContentEnabled = useAtomValue(getAdultContentAtom);

    useEffect(()=> {
        const fetchMovies = async () => {
            console.log("Adult content enabled in home:", adultContentEnabled)
            try {
                const [topRatedResponse, popularResponse, nowPlayingResponse] = await Promise.all( [
                    topRatedMoviesApi(adultContentEnabled),
                    popularMoviesApi(adultContentEnabled),
                    nowPlayingMoviesApi(adultContentEnabled)
                ])
                console.log("TOP Rated Response:", topRatedResponse+"\n\n");
       
                setTopRatedMovies( JSON.parse(topRatedResponse).results);
                setPopularMovies( JSON.parse(popularResponse).results);
                setNowPlayingMovies( JSON.parse( nowPlayingResponse).results);
            } catch (error) {
                console.log("Error fetching movies:", error);
            }
        }
    
        fetchMovies();
        
    }, [adultContentEnabled])

    return {topRatedMovies, popularMovies, nowPlayingMovies};
}