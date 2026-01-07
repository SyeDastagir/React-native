import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ExclusiveMovieItem } from "./ExclusiveMovieItem";

const MovieItemWithTitle = ({ movieList, height, width }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Only on Netflix</Text>
      <FlatList
        data={movieList}
        horizontal={true}
        renderItem={(movie) => (
          <ExclusiveMovieItem
            movieUrl={
              movie.item.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.item?.poster_path}`
                : "https://via.placeholder.com/300x150.png?text=No+Image"
            }
            height={height}
            width={width}
          />
        )}
      ></FlatList>
    </View>
  );
};

export { MovieItemWithTitle };

const styles = StyleSheet.create({
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
});
