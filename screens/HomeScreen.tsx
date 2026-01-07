import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import {
  topRatedMoviesApi,
  popularMoviesApi,
  nowPlayingMoviesApi,
} from "../apiClient/movieApis";
import { ExclusiveMovieItem } from "../components/ExclusiveMovieItem";
import { NumberTwo } from "../components/NumberTwo";
import { NumberOne } from "../components/NumberOne";
import { NumberThree } from "../components/NumberThree";
import { NumberFour } from "../components/NumberFour";
import { NumberFive } from "../components/NumberFive";
import { NumberSix } from "../components/NumberSix";
import { NumberSeven } from "../components/NumberSeven";
import { NumberEight } from "../components/NumberEight";
import { NumberNine } from "../components/NumberNine";
import { NumberTen } from "../components/NumberTen";
import { MovieItemWithTitle } from "../components/MovieItemWithTitle";

const HomeScreen = () => {
  const [topRatedMovies, setTopRatedMovies] = React.useState<any[]>([]);
  const [popularMovies, setPopularMovies] = React.useState<any[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await topRatedMoviesApi();
        setTopRatedMovies(JSON.parse(response).results);
        console.log("top rated movies:", JSON.parse(response).results);
      } catch (error) {
        console.log("Error fetching top rated movies:", error);
      }
    };

    const fetchPopularMovies = async () => {
      try {
        const popularMovies = await popularMoviesApi();
        setPopularMovies(JSON.parse(popularMovies).results);
        console.log("popular movies:", JSON.parse(popularMovies).results);
      } catch (error) {
        console.log("Error fetching popular movies:", error);
      }
    };

    const fetchNowPlayingMovies = async () => {
      try {
        const nowPlayingMovies = await nowPlayingMoviesApi();
        setNowPlayingMovies(JSON.parse(nowPlayingMovies).results);
      } catch (error) {
        console.log("Error fetching now playing movies:", error);
      }
    };

    fetchTopRatedMovies();
    fetchPopularMovies();
    fetchNowPlayingMovies();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <MovieItemWithTitle
          movieList={topRatedMovies}
          height={320}
          width={180}
        />
        <MovieItemWithTitle
          movieList={popularMovies}
          height={200}
          width={150}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Top 10 Movies in India Today</Text>
          <FlatList
            data={nowPlayingMovies.filter((_, index) => index < 10)}
            horizontal={true}
            renderItem={({ item, index }) => {
              const getNumberComponent = () => {
                switch (index + 1) {
                  case 1:
                    return <NumberOne />;
                  case 2:
                    return <NumberTwo />;
                  case 3:
                    return <NumberThree />;
                  case 4:
                    return <NumberFour />;
                  case 5:
                    return <NumberFive />;
                  case 6:
                    return <NumberSix />;
                  case 7:
                    return <NumberSeven />;
                  case 8:
                    return <NumberEight />;
                  case 9:
                    return <NumberNine />;
                  case 10:
                    return <NumberTen />;
                  default:
                    return null;
                }
              };

              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    position: "relative",
                    marginRight: 16,
                    height: 220, // ensure there's room for the overlay
                    width: index == 9 ? 340 : 240,
                  }}
                >
                  {getNumberComponent()}

                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: index == 9 ? 210 : 90, // acts like marginRight: 20 for the overlay
                    }}
                  >
                    <ExclusiveMovieItem
                      movieUrl={
                        item.backdrop_path
                          ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                          : "https://via.placeholder.com/300x150.png?text=No+Image"
                      }
                      height={200}
                      width={150}
                    />
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 12,
    backgroundColor: "#000000",
  },
  titleContainer: {
    marginTop: 30,
    flexDirection: "column",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
