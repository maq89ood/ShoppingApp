import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import colorpath from '../../asstes/ColorPath';
import ImagePath from '../../asstes/ImagePath';
import CustoHeader from '../../component/CustoHeader';
import CustomInput from '../../component/CustomInput';
import CustomRoundbtn from '../../component/CustomRoundbtn';


const SignIn = () => {
    const navigation = useNavigation()

    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={colorpath.bgcolor} barStyle='dark-content' />
            <CustoHeader
                title='Skip Here'
            />
         

            <View style={styles.mainview}>
                <Text style={styles.signtext}>Sign in</Text>
                <Text style={{ color: colorpath.btncolor, marginTop: hp(2) }}>Please sign in to continue app</Text>
                <View style={{ marginTop: hp(4) }}>
                    <CustomInput placeholder='Email adress' img={ImagePath.Message} />
                    <CustomInput secureTextEntry={true} placeholder='Password' img={ImagePath.Lock} />
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('ForgotScreen')}} style={{ alignSelf: 'flex-end', marginTop: hp(2) }}>
                    <Text style={styles.frgttext}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={{ marginTop: hp(3) }}>
                    <CustomRoundbtn 
                onPress={()=>{
                    navigation.navigate('BottomTab')
                }}

                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',alignSelf:'center',marginTop:hp(5) }}>
                    <View>
                        <Text style={{color:colorpath.btncolor,fontWeight:'400'}}>Don't have an account?</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignUpp')}}>
                        <Text style={{ color: 'red', fontSize: fs(1.8), fontWeight: '700',left:wp(1) }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    signtext: {
        color: colorpath.btncolor,
        fontSize: fs(3),
        fontWeight: 'bold'
    },
    mainview: {
        paddingHorizontal: wp(5),
        marginTop: hp(9), alignSelf: 'center'
    },
    frgttext: {
        color: 'red',
        fontSize: fs(1.7), fontWeight: '600'

    }


})
export default SignIn;