import React from "react";
import { View ,Text,TouchableOpacity,Image,ImageBackground,StyleSheet,StatusBar, KeyboardAvoidingView} from "react-native";
import colorpath from "../../asstes/ColorPath";
import CustoHeader from '../../component/CustoHeader';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs
} from "react-native-responsive-dimensions";
import CustomInput from "../../component/CustomInput";
import ImagePath from "../../asstes/ImagePath";
import CustomRoundbtn from "../../component/CustomRoundbtn";
import { useNavigation } from "@react-navigation/native";

const SignUpp = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
      
            
<CustoHeader
/>

<View style={styles.mainview}>
                <Text style={styles.signtext}>Sign Up</Text>
                <Text style={{ color: colorpath.btncolor, marginTop: hp(2) }}>Create your new account</Text>
                <View style={{ marginTop: hp(4) }}>
                    <CustomInput placeholder='Username' img={ImagePath.Message} />
                    <CustomInput  placeholder='mobile' img={ImagePath.mobile} />
                    <CustomInput placeholder='Email address' img={ImagePath.Message} />
                    <CustomInput secureTextEntry={true} placeholder='Password' img={ImagePath.simplelock} />
                     
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: hp(2) }}>
                </TouchableOpacity>

              <View style={{marginTop:hp(3)}}>
                <CustomRoundbtn
                onPress={()=>navigation.navigate('Otp')}
                />
              </View>

<View style={styles.bottmtextview}>
<Text style={styles.bottmtext}>Already have an account?</Text>
<TouchableOpacity>
<Text style={{color:'red',fontSize:fs(2.2),fontWeight:'600',marginTop:hp(1.3)}}>Sign in</Text>
</TouchableOpacity>
</View>

              
            </View>





        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    signtext: {
        color: colorpath.btncolor,
        fontSize: fs(3),
        fontWeight: 'bold'
    },
    mainview: {
        paddingHorizontal: wp(5),
        marginTop: hp(9), alignSelf: 'center'
    },
    bottmtextview:{
        color:colorpath.btncolor,
        marginTop:hp(6),  
    },
    bottmtext:{
        color:'#000',fontSize:fs(2),fontWeight:'400'
    }




})
export default SignUpp;
