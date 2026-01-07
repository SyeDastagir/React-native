import { StyleSheet, View, Image } from "react-native";
import React from "react";

interface ExclusiveMovieItemProps {
  movieUrl: string;
  height: number;
  width: number;
}

const ExclusiveMovieItem = ({
  movieUrl,
  height,
  width,
}: ExclusiveMovieItemProps) => {
  return (
    <View style={styles.movieItemContainer}>
      <Image
        source={{ uri: movieUrl }}
        style={{ height: height, width: width }}
      />
    </View>
  );
};

export { ExclusiveMovieItem };

const styles = StyleSheet.create({
  movieItemContainer: {
    borderRadius: 4,
    overflow: "hidden",
    marginRight: 8,
  },
});
