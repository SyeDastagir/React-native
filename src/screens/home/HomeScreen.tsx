import { ScrollView, Text } from "react-native";
import { MovieItemWithTitle } from "../../components/MovieItemWithTitle";
import { styled } from "styled-components/native";
import { useHome } from "./hooks/useHome";
import Top10Movies from "../../components/Top10Movies";
import {
  LargeText,
  TitleText,
  XLargeText,
} from "../../components/Text/AppText";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import { PlayButton } from "../../components/buttons/PlayButton";
import { WatchListButton } from "../../components/buttons/WatchListButton";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const { topRatedMovies, popularMovies, nowPlayingMovies } = useHome();
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) return;

    const index = Math.floor(Math.random() * nowPlayingMovies.length);
    setFeaturedMovie(nowPlayingMovies[index]);
  }, [nowPlayingMovies]);

  return (
    <ScrollView>
      <SafeAreaProvider style={{ backgroundColor: "black" }}>
        <SafeAreaView>
          <HomeViewContainer>
            <AppBarView>
              <TitleText>For Syed</TitleText>
              <Feather name="search" size={24} color="white" />
            </AppBarView>
            <CategoriesView>
              <CategoryChip>
                <LargeText>Shows</LargeText>
              </CategoryChip>

              <CategoryChip>
                <LargeText>Movies</LargeText>
              </CategoryChip>

              <CategoryChip>
                <LargeText>Categories</LargeText>
              </CategoryChip>
            </CategoriesView>
            <HighlightBannerView>
              <Image
                source={{
                  uri: featuredMovie
                    ? `https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}`
                    : "https://via.placeholder.com/300x150.png?text=No+Image",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
              <LinearGradient
                colors={["#fff0", "#000000c0", "#000000b6"]}
                style={{
                  height: "30%",
                  width: "100%",
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "column",
                  padding: 12,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                 <XLargeText>{featuredMovie?.title}</XLargeText>
                <BannerActionContainer>
                  <PlayButton />
                  <WatchListButton />
                </BannerActionContainer>
              </LinearGradient>
            </HighlightBannerView>
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
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export { HomeScreen };

const HomeViewContainer = styled.View`
  flex-direction: column;
  background-color: #000000;
  padding-left: 12px;
  padding-right: 12px;
  flex: 1;
`;

const AppBarView = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const CategoriesView = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: start;
  align-items: center;
  margin-top: 8px;
`;

const CategoryChip = styled.View`
  border-radius: 25px;
  border-color: white;
  border-width: 0.5px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 8px;
  background-color: transparent;
  align-self: center;
`;

const HighlightBannerView = styled.View`
  flex: 1;
  flex-direction: column;
  min-height: 500;
  margin-top: 12px;
  border-radius: 4px;
  border-color: white;
  border-width: 0.2px;
  background-color: white;
`;

const BannerActionContainer = styled.View`
  flex-direction: row;
  padding: 12px;
  gap: 10;
  align-items: flex-end;
  justify-content: center;
`;
