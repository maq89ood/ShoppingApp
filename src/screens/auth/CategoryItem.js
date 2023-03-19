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

const CategoryItem = () => {

    const [heart,setheart]=useState(false)
    return (
        <ScrollView style={styles.container}>

            <CustomHeader2 />

            <ImageBackground style={styles.ImageBackgroundstyle} source={ImagePath.blackman}>
                <Text style={{color:colorpath.bgcolor,fontSize:fs(4),fontWeight:'600'}}>Men</Text>
            </ImageBackground>


            <View style={styles.mainview}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colorpath.btncolor, fontSize: fs(2.5), fontWeight: '500' }}>45 Items</Text>
                    <Image source={ImagePath.Filter} />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2.5), }}>

                    <View style={{ width: wp(25), height: hp(3.9), backgroundColor: colorpath.btncolor, borderRadius: fs(3), alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ color: colorpath.bgcolor, }}>All Shoes</Text>
                    </View>

                    <View style={styles.slidderstyle}>
                        <Text >Tops & T-Shirt</Text>
                    </View>

                    <View style={styles.slidderstyle}>
                        <Text>Caps</Text>
                    </View>

                    <View style={styles.slidderstyle}>
                        <Text >Accessories</Text>
                    </View>

                    <View style={styles.slidderstyle}>
                        <Text >caps</Text>
                    </View>

                </View>
                </View>




             <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:wp(7),}}>
             <View style={{marginTop:hp(4),}}>
                        <ImageBackground style={{ width: wp(41), height: hp(25) ,paddingHorizontal:wp(3.8),}}resizeMode='stretch' source={ImagePath.jordanshoe1}>
                            <TouchableOpacity onPress={()=>(setheart(!heart))}>
                        <Image style={styles.heartstyle} source={heart? ImagePath.heartred:ImagePath.heartblank}/>
                        </TouchableOpacity>
                        </ImageBackground>
                    
               

                <Text style={{ marginTop: hp(1.5) }}>Men’s Shoe</Text>
                <Text style={{ color: colorpath.btncolor, fontWeight: '600', marginTop: hp(0.7),fontSize:fs(1.5) }}>Jordan Why Not? Zer0.4 PF</Text>
                <Text style={styles.producttxt}>$300.00</Text>
                </View>

                <View style={{marginTop:hp(4),}}>
                        <ImageBackground style={{ width: wp(41), height: hp(25) ,paddingHorizontal:wp(3.8),}}resizeMode='stretch' source={ImagePath.jordanshoe2}>
                            <TouchableOpacity onPress={()=>(setheart(!heart))}>
                        <Image style={styles.heartstyle} source={heart? ImagePath.heartred:ImagePath.heartblank}/>
                        </TouchableOpacity>
                        </ImageBackground>
                    
               

                <Text style={{ marginTop: hp(1.5) }}>Men’s Shoe</Text>
                <Text style={{ color: colorpath.btncolor, fontWeight: '600', marginTop: hp(0.7),fontSize:fs(1.5) }}>KD14</Text>
                <Text style={styles.producttxt}>$300.00</Text>
                </View>               
               
             </View>


             <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:wp(7),}}>
             <View style={{marginTop:hp(4),}}>
                        <ImageBackground style={{ width: wp(41), height: hp(25) ,paddingHorizontal:wp(3.8),}}resizeMode='stretch' source={ImagePath.jordanshoe3}>
                            <TouchableOpacity onPress={()=>(setheart(!heart))}>
                        <Image style={styles.heartstyle} source={heart? ImagePath.heartred:ImagePath.heartblank}/>
                        </TouchableOpacity>
                        </ImageBackground>
                    
               

                <Text style={{ marginTop: hp(1.5) }}>Men’s Shoe</Text>
                <Text style={{ color: colorpath.btncolor, fontWeight: '600', marginTop: hp(0.7),fontSize:fs(1.5) }}>Jordan Why Not? Zer0.4 PF</Text>
                <Text style={styles.producttxt}>$300.00</Text>
                </View>

                <View style={{marginTop:hp(4),}}>
                        <ImageBackground style={{ width: wp(41), height: hp(25) ,paddingHorizontal:wp(3.8),}}resizeMode='stretch' source={ImagePath.jordanshoe4}>
                            <TouchableOpacity onPress={()=>(setheart(!heart))}>
                        <Image style={styles.heartstyle} source={heart? ImagePath.heartred:ImagePath.heartblank}/>
                        </TouchableOpacity>
                        </ImageBackground>
                    
               

                <Text style={{ marginTop: hp(1.5) }}>Men’s Shoe</Text>
                <Text style={{ color: colorpath.btncolor, fontWeight: '600', marginTop: hp(0.7),fontSize:fs(1.5) }}>KD14</Text>
                <Text style={styles.producttxt}>$300.00</Text>
                </View>               
               
             </View>
            

              
             













        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    ImageBackgroundstyle: {
        width: wp(100), height: hp(24),
        alignSelf: 'center',
        marginTop: hp(2.5),
        alignItems:'center',
        justifyContent:'center'

    },
    mainview: {
        marginTop: hp(2.5),
        paddingHorizontal: wp(8)
    },

    slidderstyle: {
        width: wp(25), height: hp(3.9),
        backgroundColor: '#F7F8FB',
        borderRadius: fs(3),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp(2),

    },
    heartstyle:{
        width:wp(4),height:hp(2),
        marginTop:hp(2.3),
        alignSelf:'flex-end',
      
    },
    producttxt:{
        color: colorpath.btncolor,
         fontWeight: '400' ,
         marginTop:hp(.6)
    }





})

export default CategoryItem;
