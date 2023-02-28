import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import ImagePath from '../asstes/ImagePath'
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fs
} from "react-native-responsive-dimensions";

export default function CustomRoundbtn(props) {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <ImageBackground resizeMode='contain' style={{ width: wp(16), height: hp(8), alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', marginTop: hp(5) }} source={ImagePath.BlackRound}>
        <Image style={{ width: wp(5), height: hp(2.5), resizeMode: 'contain' }} source={ImagePath.ArrowRight} />
      </ImageBackground>
    </TouchableOpacity>
  )
}