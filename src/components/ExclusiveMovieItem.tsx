import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface ExclusiveMovieItemProps {
  movieUrl: string;
  height: number;
  width: number;
  borderRadius?: number;
}

const ExclusiveMovieItem = ({
  movieUrl,
  height,
  width,
  borderRadius,
}: ExclusiveMovieItemProps) => {
  return (
    <MovieItemContainer borderRadius={borderRadius}>
      <Image
        source={{ uri: movieUrl }}
        style={{ height: height, width: width }}
      />
    </MovieItemContainer>
  );
};

export { ExclusiveMovieItem };

const MovieItemContainer = styled.View<{ borderRadius?: number }>`
  border-radius: ${(props) => props.borderRadius || 8}px;
  overflow: hidden;
  margin-right: 8px;
`;
