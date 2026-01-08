import React from "react";
import { ExclusiveMovieItem } from "./ExclusiveMovieItem";
import styled from "styled-components/native";
import { FlatList } from "react-native";

interface MovieItemWithTitleProps {
  title: string;
  movieList: any[];
  height: number;
  width: number;
}

const MovieItemWithTitle = ({
  title,
  movieList,
  height,
  width,
}: MovieItemWithTitleProps) => {
  return (
    <ViewContainer>
      <TitleText>{title}</TitleText>
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
    </ViewContainer>
  );
};

export { MovieItemWithTitle };

const ViewContainer = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;

const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 12px;
`;

export { ViewContainer, TitleText };
