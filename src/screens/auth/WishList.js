import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import CustoHeader from "../../component/CustoHeader";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import { Custombtn } from "../../component/Custombtn";

const WishList = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.headingtxt}>Wishlist</Text>


            <View>
                <View style={styles.firstview}>
                    <Image source={ImagePath.nikeshoe1} />

                    <View >
                        <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '600' }}>Nike Air VaporMax Evoo</Text>
                        <Text style={{ fontSize: fs(1.3) }}>Men’s Shoe  |  US 9.5 </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2) }}>
                            <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', }}>$182</Text>
                            <View style={styles.buybtn}>
                                <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>Buy now</Text>

                            </View>
                        </View>
                    </View>

                </View>


            </View>


            <View>
                <View style={styles.firstview2}>
                    <Image source={ImagePath.nikeshoe2} />

                    <View >
                        <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '600' }}>Nike Air VaporMax Evoo</Text>
                        <Text style={{ fontSize: fs(1.3) }}>Men’s Shoe  |  US 9.5 </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2) }}>
                            <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', }}>$182</Text>
                            <View style={styles.buybtn}>
                                <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>Buy now</Text>

                            </View>
                        </View>
                    </View>
                </View>

            </View>


            <View>
            <View style={styles.firstview3}>
                <Image source={ImagePath.nikeshoe3} />

                <View >
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '600' }}>Nike Air VaporMax Evoo</Text>
                    <Text style={{fontSize:fs(1.3)}}>Men’s Shoe  |  US 9.5 </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2) }}>
                        <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '700', }}>$182</Text>
                        <View style={styles.buybtn}>
                        <Text style={{color:colorpath.btncolor,fontWeight:'600'}}>Buy now</Text>

                        </View>
                    </View>
                </View>

            </View>








            
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    headingtxt: {
        textAlign: 'center',
        color: colorpath.btncolor,
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

    firstview3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(10),
        marginTop: hp(3)

    },





    buybtn: {
        width: wp(22), height: hp(4),
        borderWidth: 1,
        borderRadius: fs(3),
        alignItems: 'center',
        justifyContent: 'center'
    }












})

export default WishList;
