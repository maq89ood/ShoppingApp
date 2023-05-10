import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
import ImagePath from '../asstes/ImagePath';
import colorpath from '../asstes/ColorPath';
import { useNavigation } from '@react-navigation/native';


export default function CustomHeader3(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={props.onPress}>
                <Image source={props.menubtn} />
            </TouchableOpacity>



            <TouchableOpacity>
                <Image style={{ width: wp(6), height: hp(2.7), resizeMode: 'contain', tintColor: colorpath.btncolor }}
                    source={props.backbtn} />
            </TouchableOpacity>



            <View style={{ marginHorizontal: wp(27), bottom: hp(2), alignSelf: 'center', justifyContent: 'center' }}>
                <Image style={{ width: wp(12), height: hp(6) }} source={ImagePath.ractengle2} />
                <View style={styles.whiteview}>
                    <Image style={{ width: wp(8), height: (16) }} source={ImagePath.oo2} />
                </View>
            </View>

            <TouchableOpacity>
                <Image style={{ width: wp(9), height: hp(3), resizeMode: 'contain', tintColor: colorpath.btncolor, bottom: hp(1) }} source={props.likebtn} />
            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(3), paddingHorizontal: wp(5), width: wp(100), height: hp(8), backgroundColor: colorpath.bgcolor, top: hp(0)
    },
    whiteview: {
        width: wp(12), height: hp(3), backgroundColor: "white", alignItems: 'center', justifyContent: 'center', bottom: hp(4.3)
    }



})