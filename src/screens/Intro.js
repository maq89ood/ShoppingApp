import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import colorpath from '../asstes/ColorPath';
import ImagePath from '../asstes/ImagePath';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import { Custombtn } from '../component/Custombtn';
import { useNavigation } from '@react-navigation/native';


const Intro = () => {
    const navigation = useNavigation()
    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={colorpath.bgcolor} barStyle={'dark-content'} />
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: hp(5) }}>
                <Image style={styles.imgstyl} source={ImagePath.ractengle} />
                <View style={styles.whiteview}>
                    <Image style={styles.img2styl} source={ImagePath.oo} />
                </View>
                <Text style={styles.textstl}>Build your own poth with</Text>
                <Text style={[styles.textstl, { marginTop: hp(0.5) }]}>every step.</Text>
            </View>


            <View style={styles.btnView}>
                <Custombtn
                    textcolor='#000'
                    title='Sign in'
                    onPress={() => { navigation.navigate('SignIn') }}
                />
                <Custombtn
                    textcolor='#fff'
                    bgcolor='#000'
                    title='Register'
                    onPress={() => { navigation.navigate('SignUpp') }}

                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor, alignItems: 'center', justifyContent: 'center'
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
    textstl: {
        marginTop: hp(8), color: colorpath.btncolor
    },
    btnView: {
        position: 'absolute', bottom: hp(9)
    }

})
export default Intro;