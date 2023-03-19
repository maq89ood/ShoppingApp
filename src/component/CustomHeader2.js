import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
import ImagePath from '../asstes/ImagePath';
import colorpath from '../asstes/ColorPath';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function CustomHeader2(props) {
    const navigation = useNavigation()


    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: wp(6), marginTop: hp(3),alignItems:'center',justifyContent:'space-between'}}>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image style={{ width: wp(6), height: hp(2.7), resizeMode: 'contain', tintColor: colorpath.btncolor }} source={ImagePath.Headerarrow} />
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
                <Text style={{ fontSize: fs(2.5),paddingRight:wp(35),color:colorpath.btncolor,fontWeight:'600'}}>{props.title}</Text>
            </TouchableOpacity>

          


        </View>
    )
}