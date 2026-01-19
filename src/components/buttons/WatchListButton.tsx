import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {PlayButtonStyle} from './PlayButton.style'
import Entypo from '@expo/vector-icons/Entypo';
import { XLargeText } from '../Text/AppText';

const WatchListButton = () => {
  return (
    <PlayButtonStyle backgroundColor = "#2e2d2dc8">
        <Entypo name="plus" size={24} color="white" />
        <XLargeText color = "#fff">My List</XLargeText>
    </PlayButtonStyle>
  )
}

export {WatchListButton};


