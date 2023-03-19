import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, ScrollView } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";

const Search = () => {
    return (
        <ScrollView style={styles.container}>

            <TextInput
                style={styles.inputstyle}
                placeholder={'Search'}
            />
            <Image style={{ bottom: hp(5), marginHorizontal: wp(3.8) }} source={ImagePath.searchicon} />

              <ImageBackground style={{width:wp(90.3),height:hp(40),}} source={ImagePath.srchpic1}>
                <View style={styles.bgImagestyle}>
               <Text style={{color:'white',fontSize:fs(1.3)}}>TOPS & T -SHIRTS COLLECTION</Text>
               <Text style={{color:colorpath.bgcolor}}>_______</Text>
               <Text style={{color:colorpath.bgcolor,fontSize:fs(4),fontWeight:'600'}}>25% OFF</Text>
               <Text style={{color:colorpath.bgcolor}}>For Selected Tops & </Text>
               <Text style={{color:colorpath.bgcolor}}>T-Shirt Style</Text>
               </View>
              </ImageBackground>


              <ImageBackground style={{width:wp(90.3),height:hp(40),marginTop:hp(3)}} source={ImagePath.searchicon2}>
                <View style={styles.bgImagestyle}>
               <Text style={{color:'white',fontSize:fs(1.3)}}>SPORT COLLECTION</Text>
               <Text style={{color:colorpath.bgcolor}}>_______</Text>
               <Text style={{color:colorpath.bgcolor,fontSize:fs(4),fontWeight:'600'}}>30% OFF</Text>
               <Text style={{color:colorpath.bgcolor}}>For Selected Sport Style </Text>
               
               </View>
              </ImageBackground>

              <ImageBackground style={{width:wp(90.3),height:hp(40),marginTop:hp(3)}} source={ImagePath.srchpic1}>
                <View style={styles.bgImagestyle}>
               <Text style={{color:'white',fontSize:fs(1.3)}}>SPORT COLLECTION</Text>
               <Text style={{color:colorpath.bgcolor}}>_______</Text>
               <Text style={{color:colorpath.bgcolor,fontSize:fs(4),fontWeight:'600'}}>30% OFF</Text>
               <Text style={{color:colorpath.bgcolor}}>For Selected Sport Style </Text>
               
               </View>
              </ImageBackground>

              <ImageBackground style={{width:wp(90.3),height:hp(40),marginTop:hp(3)}} source={ImagePath.searchicon2}>
                <View style={styles.bgImagestyle}>
               <Text style={{color:'white',fontSize:fs(1.3)}}>SPORT COLLECTION</Text>
               <Text style={{color:colorpath.bgcolor}}>_______</Text>
               <Text style={{color:colorpath.bgcolor,fontSize:fs(4),fontWeight:'600'}}>30% OFF</Text>
               <Text style={{color:colorpath.bgcolor}}>For Selected Sport Style </Text>
               
               </View>
              </ImageBackground>

        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor, paddingHorizontal: wp(4.9)
    },
    inputstyle: {
        backgroundColor: '#EEEEEE',
        marginTop: hp(3),
        paddingHorizontal: wp(14),
        fontSize: fs(2)
    },
    bgImagestyle:{
     marginTop:hp(8.5),marginHorizontal:wp(9)
        
    }
  








})

export default Search;
