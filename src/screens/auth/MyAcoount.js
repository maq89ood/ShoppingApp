import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, StatusBar } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import {responsiveHeight as hp,responsiveWidth as wp,responsiveFontSize as fs} 
from "react-native-responsive-dimensions";

const MyAcoount = () => {

    return (
  
        <View style={styles.container}>
            <ScrollView>
     

            <Text style={styles.headingtxt}>My Account</Text>

            <View style={styles.profilview}>
                <Image source={ImagePath.redshoe} />
                <View style={styles.editbtn}>
                    <Image source={ImagePath.pensillogo} />
                </View>
            </View>

            <Text style={styles.usertxt}>{'Masood Aly'}</Text>



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


            {/* <TouchableOpacity style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(2),left:wp(3)}}>My Order</Text>
            <Image source={ImagePath.righvectr}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(2),left:wp(3)}}>Voucher</Text>
            <Image source={ImagePath.righvectr}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(2),left:wp(3)}}>Shipping Addressed</Text>
            <Image source={ImagePath.righvectr}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(2),left:wp(3)}}>FAQ</Text>
            <Image source={ImagePath.righvectr}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(2),left:wp(3)}}>Custmer Services</Text>
            <Image source={ImagePath.righvectr}/>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.bottomstyles}>
            <Text style={{color:colorpath.btncolor,fontWeight:'600',fontSize:fs(2),left:wp(3)}}>Setting</Text>
            <Image source={ImagePath.righvectr}/>
            </TouchableOpacity> */}


            </ScrollView>
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
         marginTop:hp(3),alignSelf:'center',
         padding:wp(3),flexDirection:'row',
         justifyContent:'space-between',
         borderBottomColor:"lightgray",borderBottomWidth:1
    },
 









})

export default MyAcoount;
