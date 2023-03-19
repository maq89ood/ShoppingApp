import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import CustoHeader from "../../component/CustoHeader";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import { Custombtn } from "../../component/Custombtn";

const Cart = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headintxt}>Cart</Text>


            <View style={styles.firstview}>
                <Image source={ImagePath.nikeshoe1} />

                <View >
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '600' }}>Nike Air VaporMax Evoo</Text>
                    <Text>Men’s Shoe  |  US 9.5 </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2) }}>
                        <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', }}>$182</Text>
                        <Text>x 1</Text>
                    </View>
                </View>


            </View>


            <View style={styles.firstview2}>
                <Image source={ImagePath.nikeshoe2} />

                <View>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '600', }}>Nike Air VaporMax Evoo</Text>
                    <Text>Men’s Shoe  |  US 9.5 </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2) }}>
                        <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', }}>$182</Text>
                        <Text>x 1</Text>
                    </View>
                </View>


            </View>



            <View style={styles.bottomstyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: fs(2) }}>Promo code</Text>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', marginLeft: wp(25) }}>NK54T3U</Text>
                    <Image source={ImagePath.croxxicon} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(5) }}>
                    <Text style={{ fontSize: fs(2) }}>2 Items</Text>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', marginLeft: wp(25) }}>$364.00</Text>
                </View>

                <Custombtn
             bgcolor={colorpath.btncolor}
             textcolor={colorpath.bgcolor}
             title={'Checkout'}
             margintop={hp(4)}
             />
            </View>

         


        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    headintxt: {
        color: colorpath.btncolor,
        textAlign: 'center',
        marginTop: hp(3),
        fontSize: fs(3),
        fontWeight: '500'
    },

    firstview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(10),
        marginTop: hp(6)

    },
    firstview2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(10),
        marginTop: hp(3)

    },

    bottomstyle: {
        width: wp(100), height: hp(30), marginTop: hp(31),
        paddingHorizontal: wp(10),


    }









})

export default Cart;
