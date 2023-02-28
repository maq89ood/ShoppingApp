import React from "react";
import { View,Image,Text,TouchableOpacity,StyleSheet } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import CustoHeader from "../../component/CustoHeader";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import { Custombtn } from "../../component/Custombtn";

const ResetSuccess = () => {
    return (
        <View style={styles.container}>
            
<CustoHeader
/>


<View style={styles.imgstyl}>
    <Image
    source={ImagePath.righticon}
    />
</View>

<Text style={{textAlign:'center',marginTop:hp(9),color:colorpath.btncolor,fontSize:fs(3.3),fontWeight:'600'}}>Reset Successful</Text>

<TouchableOpacity style={{alignItems:'center',marginTop:hp(3.9)}}>
<Custombtn
textcolor={'#fff'}
title={'Sign in now'}
bgcolor={'black'}
/>
</TouchableOpacity>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    imgstyl:{
        alignItems:'center',marginTop:hp(17)
    }
  
   




})

export default ResetSuccess;
