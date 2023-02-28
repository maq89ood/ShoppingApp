import { View, Text, StyleSheet,TextInput,Image } from 'react-native'
import React from 'react'
import ImagePath from '../asstes/ImagePath'
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";

export default function CustomInput(props) {
    return (
        <View>
            <TextInput
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
                style={styles.input}
            />
            <Image style={{ width: wp(7), height: hp(3), resizeMode: 'contain', position:'absolute',right:wp(3),top:hp(3.5)}} source={props.img} />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        width: wp(80), paddingVertical: hp(1), borderRadius: wp(2), borderWidth: 1, paddingLeft: wp(5),marginTop:hp(2),paddingRight:wp(10)
    }


})