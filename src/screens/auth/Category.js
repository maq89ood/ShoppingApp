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
import CustomHeader3 from "../../component/CustomHeader3";

const Category = () => {
    return (
        <View style={styles.container}>

            <View style={{ padding: wp(8), flexDirection: 'row' }}>
                <Image source={ImagePath.crossicon} />

                <View style={{ marginHorizontal: wp(35), marginTop: hp(-1) }}>
                    <Image source={ImagePath.ractengle2} />
                    <View style={{ width: wp(10), height: hp(1.6), backgroundColor: colorpath.bgcolor, bottom: hp(3), alignItems: 'center' }}>
                        <Image style={{ right: wp(.3) }} source={ImagePath.oo2} />
                    </View>
                </View>
            </View>


            <View style={{marginHorizontal:wp(10)}}>
                <Text style={{color:colorpath.btncolor,fontSize:fs(3.5),fontWeight:'600',marginTop:hp(3)}}>New Arrival</Text>
                <Text style={{color:colorpath.btncolor,fontSize:fs(3.5),fontWeight:'600',marginTop:hp(3)}}>Man</Text>
                <Text style={{color:colorpath.btncolor,fontSize:fs(3.5),fontWeight:'600',marginTop:hp(3)}}>Woman</Text>
                <Text style={{color:colorpath.btncolor,fontSize:fs(3.5),fontWeight:'600',marginTop:hp(3)}}>Kids</Text>
                <Text style={{color:colorpath.btncolor,fontSize:fs(3.5),fontWeight:'600',marginTop:hp(3)}}>Sale</Text>

            </View>







        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },














})

export default Category;
