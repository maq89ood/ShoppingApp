import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import CustomHeader2 from "../../component/CustomHeader2";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
import { Custombtn } from "../../component/Custombtn";
import { useNavigation } from "@react-navigation/native";


const BillingScreen = () => {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>

            <CustomHeader2
                title={'Checkout'}
            />


            <View style={styles.shippingstyl}>
                <Image
                    source={ImagePath.Location}
                />

                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />


                <Image
                    source={ImagePath.Group}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />


                <Image
                    source={ImagePath.ryticon}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: hp(15) }}>
                <Image source={ImagePath.successlogo} />
            </View>


            <Text style={{ textAlign: 'center', color: colorpath.btncolor, fontSize: fs(3.5), fontWeight: '600', marginTop: hp(5) }}>Order Success</Text>

            <View style={{ textAlign: 'center', paddingHorizontal: wp(13), marginTop: hp(3) }}>
                <Text style={{ fontSize: fs(2) }}>Thank you for purchasing. Your order </Text>
                <Text style={{ fontSize: fs(2), marginTop: hp(1) }}>will be shipped in 2-4 working days</Text>
            </View>



            <Custombtn
                onPress={() => navigation.navigate('Home')}

                title={"Continue shopping"}
                bgcolor={colorpath.btncolor}
                textcolor={colorpath.bgcolor}
                margintop={hp(15)}
            />



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    shippingstyl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp(3.9),
        paddingHorizontal: wp(12)
    },






})
export default BillingScreen;
