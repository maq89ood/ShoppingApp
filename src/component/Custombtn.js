import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";

export const Custombtn = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ width: wp(80), paddingVertical: hp(2), alignItems: 'center', justifyContent: 'center', backgroundColor:props.bgcolor, borderRadius: wp(10), borderWidth: 1 ,marginTop:props.margintop,alignSelf:'center'}}>
            <Text style={{ color: props.textcolor, fontWeight: '700',fontSize:fs(1.9) }}>{props.title}</Text>
        </TouchableOpacity>
    )
}