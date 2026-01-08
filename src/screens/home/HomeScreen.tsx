import { ScrollView } from "react-native";
import { MovieItemWithTitle } from "../../components/MovieItemWithTitle";
import { styled } from "styled-components/native";
import { useHome } from "./hooks/useHome";
import Top10Movies from "../../components/Top10Movies";

const HomeScreen = () => {
  const { topRatedMovies, popularMovies, nowPlayingMovies } = useHome();

  return (
    <ScrollView>
      <HomeViewContainer>
        <MovieItemWithTitle
          title="Only on Netflix"
          movieList={topRatedMovies}
          height={350}
          width={180}
        />

        <MovieItemWithTitle
          title="Top Trending Movies"
          movieList={popularMovies}
          height={200}
          width={150}
        />

        <Top10Movies nowPlayingMovies={nowPlayingMovies} />
      </HomeViewContainer>
    </ScrollView>
  );
};

export { HomeScreen };

const HomeViewContainer = styled.View`
  flex-direction: column;
  background-color: #000000;
  padding: 12px;
  flex: 1;
`;
