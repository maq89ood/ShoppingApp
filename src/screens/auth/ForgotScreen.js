import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet } from "react-native";
import colorpath from "../../asstes/ColorPath";
import CustoHeader from "../../component/CustoHeader";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import CustomInput from "../../component/CustomInput";
import ImagePath from "../../asstes/ImagePath";
import CustomRoundbtn from "../../component/CustomRoundbtn";
import { useNavigation } from "@react-navigation/native";

const ForgotScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <CustoHeader
            />


            <View style={styles.forgottextview}>
                <Text style={{ color: '#000', fontSize: fs(3.5), fontWeight: 'bold' }}>Forgot Password</Text>
                <Text style={{ color: 'black', marginTop: hp(1.6), fontSize: fs(1.8) }}>Enter your mobile number</Text>
            </View>

            <View style={styles.inputstyle}>
                <CustomInput placeholder='mobile' img={ImagePath.mobile} />
            </View>


            <TouchableOpacity style={{ paddingHorizontal: wp(8), marginTop: hp(6) }}>
                <CustomRoundbtn
                    onPress={() => { navigation.navigate('ResetSuccess') }}
                />
            </TouchableOpacity>


        </View>









    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    forgottextview: {
        marginTop: hp(6),
        paddingHorizontal: wp(9)

    },

    inputstyle: {
        alignItems: 'center',
        marginTop: hp(5)
    }





})
export default ForgotScreen;
