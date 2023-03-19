import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
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
import CustomHeader2 from "../../component/CustomHeader2";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {

    const [heart, setheart] = useState(false)
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.container}>

            <CustomHeader3
                backbtn={ImagePath.Headerarrow}
                likebtn={ImagePath.heartblank}
            />

            <ImageBackground style={{ width: wp(100), height: hp(50), bottom: hp(2), }} source={ImagePath.bigshoe}>
                {/* <View style={{ flexDirection: 'row', alignSelf: 'center', paddingHorizontal: wp(8), marginTop: hp(33) }}>
                    <Image source={ImagePath.minishoe} />
                    <Image source={ImagePath.minishoe2} />
                    <Image source={ImagePath.minishoe3} />
                    <Image source={ImagePath.minishoe4} />
                </View> */}
            </ImageBackground>


            <View style={{  paddingHorizontal: wp(6.5) }}>
                <Text>men's shoe</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2), fontWeight: '600' }}>Nike Air VaporMax Evo</Text>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(3), fontWeight: '600' ,bottom:hp(1)}}>$182</Text>
                </View>

                <Text style={styles.txtsizestyle}>Available Sizes</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.sizestyle}>
                        <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>US 7</Text>
                    </View>

                    <View style={styles.sizestyle}>
                        <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>US 8</Text>
                    </View>
                    <View style={styles.sizestyle}>
                        <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>US 9</Text>
                    </View>
                    <View style={styles.sizestyle}>
                        <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>US 9.5</Text>
                    </View>
                    <View style={styles.sizestyle}>
                        <Text style={{ color: colorpath.btncolor, fontWeight: '600' }}>US 10</Text>
                    </View>

                </View>

                <Text style={styles.discriptiontextstyl}>Description</Text>
                <Text style={{marginTop:hp(2),fontSize:fs(1.7)}}>The Nike Air VaporMax Evo puts Air Max DNA under the microscope, to showcase the distinguishing </Text>


<View style={{marginTop:hp(2),flexDirection:'row',justifyContent:'space-between'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
    <ImageBackground style={styles.bgimgstyl} source={ImagePath.cartbg}>
         <Image source={ImagePath.shoppingcart}/>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('BillingScreen')} style={styles.buybtn}>
            <Text style={{ color:colorpath.bgcolor, fontWeight: '700',fontSize:fs(1.9) }}>Buy Now</Text>
        </TouchableOpacity>
</View>


            </View>












        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    txtsizestyle: {
        color: colorpath.btncolor,
        fontWeight: '600',
        fontSize: fs(2),
        marginTop: hp(1)
    },
    sizestyle: {
        width: wp(15), height: hp(3.5),
        marginTop: hp(1.6),
        borderWidth: 2,
        borderColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: fs(3),
    },
    discriptiontextstyl:{
        color: colorpath.btncolor,
         fontWeight: '600',
          fontSize: fs(2), 
          marginTop: hp(3)
    },
    bgimgstyl:{
        width:wp(12),height:hp(4),
        alignItems:'center',
        justifyContent:'center'
    },
    buybtn:{
        width: wp(70),
         paddingVertical: hp(1.3),
          alignItems: 'center',
           justifyContent: 'center',
            backgroundColor:colorpath.btncolor, 
            borderRadius: wp(10), 
            borderWidth: 1 ,
            alignSelf:'center'
    }







})

export default Detail;
