import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import colorpath from '../asstes/ColorPath';
import ImagePath from '../asstes/ImagePath';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';


const Splace = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={colorpath.bgcolor} barStyle={'dark-content'} />
            <View style={styles.iconstyl}>
                <Image style={styles.imgstyl} source={ImagePath.ractengle} />
                <View style={styles.whiteview}>
                    <Image style={styles.img2styl} source={ImagePath.oo} />
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Intro') }} style={styles.opc}>
                <Text style={styles.btntext}>Start Shopping</Text>
            </TouchableOpacity>
            <Image style={styles.girlimg} source={ImagePath.splaceimg} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor
    },
    iconstyl: {
        width: wp(90), height: hp(35), alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
    },
    imgstyl: {
        width: wp(25), height: hp(12), resizeMode: 'contain',
    },
    whiteview: {
        width: wp(30), height: hp(5), backgroundColor: colorpath.bgcolor, marginTop: hp(-8.5), alignItems: 'center', justifyContent: 'center'
    },
    img2styl: {
        width: wp(13), height: hp(6.5), resizeMode: 'contain'
    },
    opc: {
        width: wp(70), height: hp(8.5), borderRadius: wp(77), backgroundColor: colorpath.btncolor, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'
    },
    btntext: {
        color: '#fff', fontSize: fs(2.3), fontWeight: '600'
    },
    girlimg: {
        resizeMode: 'contain', width: '100%', height: hp(67),
    }
})
export default Splace;