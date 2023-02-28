import React from "react";
import { View ,Text,TouchableOpacity,Image,ImageBackground,StyleSheet,StatusBar} from "react-native";
import colorpath from "../../asstes/ColorPath";
import CustoHeader from "../../component/CustoHeader";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import CustomRoundbtn from "../../component/CustomRoundbtn";
const Otp = () => {
    return (
        <View style={styles.container}>
            
<CustoHeader/>

<Text style={{textAlign:'center',marginTop:hp(10),color:colorpath.btncolor,fontSize:fs(3.4),fontWeight:'bold'}}>Verify Mobile Number</Text>

<Text style={{paddingHorizontal:wp(16.8),fontSize:fs(2),marginTop:hp(1)}}>Enter the OTP code sent to you</Text>

<Text style={{textAlign:'center',color:'red',fontWeight:'600',marginTop:hp(18)}}>Resend in 00:30</Text>


<View style={{paddingHorizontal:wp(8)}}>
<CustomRoundbtn/>

</View>








        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
 




})
export default Otp;
