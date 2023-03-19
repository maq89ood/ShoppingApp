import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, StatusBar } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import CustoHeader from "../../component/CustoHeader";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import { Custombtn } from "../../component/Custombtn";

const MyAcoount = () => {

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />

            <Text style={styles.headingtxt}>My Account</Text>

            <View style={styles.profilview}>
                <Image source={ImagePath.redshoe} />
                <View style={styles.editbtn}>
                    <Image source={ImagePath.pensillogo} />
                </View>
            </View>

            <Text style={styles.usertxt}>Van Smith</Text>



            <View style={styles.userdatastyle}>
                <Text style={{ color: colorpath.btncolor, fontSize: fs(2.5),fontWeight:'600' }}>0</Text>
                <Image source={ImagePath.Line} />
                <Text style={{ color: colorpath.btncolor, fontSize: fs(2.5),fontWeight:'600' }}>0</Text>
                <Image source={ImagePath.Line} />
                <Text style={{ color: colorpath.btncolor, fontSize: fs(2.5) ,fontWeight:'600'}}>1</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: wp(7), marginTop: hp(2) }}>
                <Text style={{ fontSize: fs(1.5), marginHorizontal: wp(4) }}>Processing</Text>
                <Text style={{ left: wp(14), fontSize: fs(1.5) }}>Shipped</Text>
                <Text style={{ marginHorizontal: wp(28.3), fontSize: fs(1.5) }}>Ready for pickup</Text>

            </View>


            <View style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(1.9),left:wp(3)}}>My Order</Text>
            <Image source={ImagePath.righvectr}/>
            </View>

            <View style={styles.simpleline}></View>

            <View style={styles.bottomstyles2}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(1.9),left:wp(3)}}>Vouchers</Text>
            <Image source={ImagePath.righvectr}/>
            </View>
            <View style={styles.simpleline}></View>

            <View style={styles.bottomstyles2}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(1.9),left:wp(3)}}>Shipping Adress</Text>
            <Image source={ImagePath.righvectr}/>
            </View>
            <View style={styles.simpleline}></View>

            <View style={styles.bottomstyles2}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(1.9),left:wp(3)}}>FAQ</Text>
            <Image source={ImagePath.righvectr}/>
            </View>
            <View style={styles.simpleline}></View>

            <View style={styles.bottomstyles2}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(1.9),left:wp(3)}}>Customer Service</Text>
            <Image source={ImagePath.righvectr}/>
            </View>
            <View style={styles.simpleline}></View>

            <View style={styles.bottomstyles2}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(1.9),left:wp(3)}}>Setting </Text>
            <Image source={ImagePath.righvectr}/>
            </View>
            <View style={styles.simpleline}></View>




        </ScrollView>
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
        fontSize: fs(2.5),
        fontWeight: '500'
    },
    profilview: {
        alignItems: 'center',
        marginTop: hp(2)
    },
    editbtn: {
        width: wp(9), height: hp(4.5),
        backgroundColor: colorpath.btncolor,
        borderRadius: fs(5),
        bottom: hp(4), left: wp(8), alignItems: 'center',
        justifyContent: 'center'
    },
    usertxt: {
        color: colorpath.btncolor,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: fs(2),
        bottom: hp(2)
    },
    userdatastyle: {
        flexDirection: 'row',
        marginTop: hp(2.8),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp(17),



    },
    bottomstyles:{
        width: wp(90), height: hp(6),
         backgroundColor: 'white',
         marginTop:hp(5),alignSelf:'center',
         padding:wp(3),flexDirection:'row',
         justifyContent:'space-between'
    },
    bottomstyles2:{
        width: wp(90), height: hp(6),
         backgroundColor: 'white',
         marginTop:hp(2),alignSelf:'center',
         padding:wp(3),flexDirection:'row',
         justifyContent:'space-between'
    },



    simpleline:{
        width:wp(90),height:hp(0.3),
        backgroundColor:'#F4F5F7',
        alignSelf:'center',
        marginTop:hp(1)
    }








})

export default MyAcoount;
