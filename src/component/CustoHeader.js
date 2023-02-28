import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import ImagePath from '../asstes/ImagePath';
import colorpath from '../asstes/ColorPath';
import { useNavigation } from '@react-navigation/native';

export default function CustoHeader(props) {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(6), marginTop: hp(3) }}>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image style={{ width: wp(6), height: hp(2.7), resizeMode: 'contain', tintColor: colorpath.btncolor }} source={ImagePath.Headerarrow} />
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: fs(1.5) }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}