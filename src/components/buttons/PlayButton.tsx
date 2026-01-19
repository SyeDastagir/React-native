import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {PlayButtonStyle} from './PlayButton.style'
import Entypo from '@expo/vector-icons/Entypo';
import { XLargeText } from '../Text/AppText';

type Props = {}

const PlayButton = (props: Props) => {
  return (
    <PlayButtonStyle backgroundColor = "#ffffff">
        <Entypo name="controller-play" size={24} color="black" />
        <XLargeText color = "#000000">My List</XLargeText>
    </PlayButtonStyle>
  )
}

export {PlayButton};


