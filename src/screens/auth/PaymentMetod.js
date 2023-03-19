import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, } from "react-native";
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


const PaymentMethod = () => {
    const navigation = useNavigation()


    return (
        <ScrollView style={styles.container}>

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

            <Text style={{ marginHorizontal: wp(13), fontSize: fs(2.3), marginTop: hp(4), color: colorpath.btncolor, fontWeight: '600' }}>Payment Option</Text>


            <View style={styles.paymentstyle}>
                <View style={styles.inpaymentstyle}>
                    <ImageBackground style={{ width: fs(3), height: hp(3.2), alignItems: 'center', justifyContent: 'center', marginTop: hp(.5) }} source={ImagePath.onlycrcle}>
                        <Image source={ImagePath.blackcrcle} />
                    </ImageBackground>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(1.8), paddingRight: wp(14), marginTop: hp(.6), fontWeight: '700' }}>Online Banking</Text>
                    <Image style={{ paddingLeft: wp(4) }} source={ImagePath.fpxlogo} />
                </View>
            </View>


            <View style={styles.paymentstyle2}>
                <View style={styles.inpaymentstyle2}>
                    <ImageBackground style={{ width: fs(3), height: hp(3.2), alignItems: 'center', justifyContent: 'center', marginTop: hp(.5) }} source={ImagePath.emptycrcle}>
                        {/* <Image source={ImagePath.blackcrcle}/> */}
                    </ImageBackground>
                    <Text style={{ marginLeft: wp(4.3), fontSize: fs(1.8), marginTop: hp(.6), fontWeight: '700' }}>Credit / Debit Card</Text>
                    <Image style={{ left: wp(3), bottom: hp(.7) }} source={ImagePath.visaCard} />
                    <Image style={{}} source={ImagePath.masterCard} />

                </View>
            </View>

            <View style={styles.paymentstyle3}>
                <View style={styles.inpaymentstyle3}>
                    <ImageBackground style={{ width: fs(3), height: hp(3.2), alignItems: 'center', justifyContent: 'center', marginTop: hp(.5) }} source={ImagePath.emptycrcle}>
                        {/* <Image source={ImagePath.blackcrcle}/> */}
                    </ImageBackground>
                    <Text style={{ right: wp(12.8), fontSize: fs(1.8), marginTop: hp(.6), fontWeight: '700' }}>Paypal</Text>
                    <Image style={{ marginTop: hp(1.4) }} source={ImagePath.paypallogo} />

                </View>
            </View>


            <View style={styles.bottomstyle}>

                <View style={styles.bottominstyle}>
                    <Text style={{ fontSize: fs(2) ,}}>Sub-total</Text>
                    <Text style={{ color: colorpath.btncolor, fontWeight: '700', fontSize: fs(2) }}>$364.00</Text>
                </View>


                <View style={styles.bottominstyle}>
                    <Text style={{ fontSize: fs(2), marginTop:hp(3)}}>Shipping fee</Text>
                    <Text style={{ color: colorpath.btncolor, fontWeight: '700', marginTop:hp(3),fontSize: fs(2) }}>$24.00</Text>
                </View>

                <View style={styles.bottominstyle}>
                    <Text style={{ fontSize: fs(2.5), marginTop:hp(6),color:colorpath.btncolor,fontWeight:'600'}}> Total Payment</Text>
                    <Text style={{ color: colorpath.btncolor, fontWeight: '700', marginTop:hp(6),fontSize: fs(2) }}>$364.00</Text>
                </View>

<Custombtn
onPress={()=>navigation.navigate('SuccessOrder')}
textcolor={colorpath.bgcolor}
title={'Place Order'}
margintop={hp(2.5)}
bgcolor={colorpath.btncolor}

/>
             

            </View>








        </ScrollView>
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
    paymentstyle: {
        width: wp(78),
        height: hp(7.6),
        borderWidth: 1,
        marginTop: hp(4),
        borderRadius: fs(1),
        marginHorizontal: wp(13),


    },
    inpaymentstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        marginTop: hp(1.4)

    },
    paymentstyle2: {
        width: wp(78),
        height: hp(7.6),
        borderWidth: 1,
        borderColor: '#C1C7D0',
        marginTop: hp(4),
        borderRadius: fs(1),
        marginHorizontal: wp(13)
    },
    inpaymentstyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        marginTop: hp(1.4)

    },

    paymentstyle3: {
        width: wp(78),
        height: hp(7.6),
        borderWidth: 1,
        borderColor: '#C1C7D0',
        marginTop: hp(4),
        borderRadius: fs(1),
        marginHorizontal: wp(13)
    },
    inpaymentstyle3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        marginTop: hp(1.4),


    },
    bottomstyle: {
        width: wp(100),
        height: hp(30),
        backgroundColor: "#FFFFFF",
        marginTop: hp(15),
        
    },

    bottominstyle: {
        paddingHorizontal: wp(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }










})
export default PaymentMethod;
