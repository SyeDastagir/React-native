import { FlatList, View } from "react-native";
import React from "react";
import { TitleText, ViewContainer } from "./MovieItemWithTitle";
import { NumberComponentMap } from "./NumberComponents";
import { ExclusiveMovieItem } from "./ExclusiveMovieItem";

const Top10Movies = ({ nowPlayingMovies }) => {
  return (
    <ViewContainer>
      <TitleText>Top 10 Movies in India Today</TitleText>
      <FlatList
        data={nowPlayingMovies.slice(0, 10)}
        horizontal={true}
        renderItem={({ item, index }) => {
          const tenthItem = index === 9;

          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                position: "relative",
                marginRight: 16,
                height: 220,
                width: tenthItem ? 340 : 240,
              }}
            >
              {NumberComponentMap[index + 1]}

              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: tenthItem ? 210 : 90,
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
                  borderRadius={2}
                />
              </View>
            </View>
          );
        }}
      ></FlatList>
    </ViewContainer>
  );
};

export default Top10Movies;
