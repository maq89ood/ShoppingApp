import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";
import CustomHeader2 from "../../component/CustomHeader2";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
import { Custombtn } from "../../component/Custombtn";
import { useNavigation } from "@react-navigation/native";


const BillingScreen = () => {

const[uncheck,setcheck]=useState(true)
const navigation = useNavigation()




    return (
        <ScrollView style={styles.container}>

            <CustomHeader2
                title={'Checkout'}
            />

            <View style={styles.shippingstyl}>
                <Image
                    source={ImagePath.Location}
                />

                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />


                <Image
                    source={ImagePath.Group}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />
                <Image
                    source={ImagePath.simplecircle}
                />


                <Image
                    source={ImagePath.ryticon}
                />
            </View>


            <View style={styles.mainView}>
                <Text style={{ color: colorpath.btncolor, fontSize: fs(2.2), fontWeight: '600' }}>Billing address</Text>

                <View style={styles.inputstyle}>
                    <Text>Full Name</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#C1C7D0', bottom: hp(1.4), paddingLeft: wp(-1) }}
                        placeholder={'Haji Kayyum'}
                        placeholderTextColor={colorpath.btncolor}
                        fontWeight={'600'}
                    />

                    <Text style={{ marginTop: hp(2) }}>Address</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#C1C7D0', bottom: hp(1.4), paddingLeft: wp(-1) }}
                        placeholder={'538 Antom Street'}
                        placeholderTextColor={colorpath.btncolor}
                        fontWeight={'600'}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ marginTop: hp(2), }}>Address</Text>
                        <Text style={{ marginTop: hp(2), marginRight: wp(22.9) }}>Poskod</Text>

                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TextInput
                            style={{ borderBottomWidth: 1, borderBottomColor: '#C1C7D0', bottom: hp(1.4), paddingLeft: wp(-1), width: wp(35) }}
                            placeholder={'jaipur'}
                            placeholderTextColor={colorpath.btncolor}
                            fontWeight={'600'}
                        />
                        <Image source={ImagePath.downarrow} style={{ right: wp(6), top: hp(2) }} />
                        <TextInput
                            style={{ borderBottomWidth: 1, borderBottomColor: '#C1C7D0', bottom: hp(1.4), paddingLeft: wp(-1), width: wp(35) }}
                            placeholder={'88300'}
                            placeholderTextColor={colorpath.btncolor}
                            fontWeight={'600'}
                        />
                    </View>

                    <Text style={{ marginTop: hp(1.7) }}>country</Text>
                    <Image source={ImagePath.downarrow} style={{ alignSelf: 'flex-end', top: hp(2.9) }} />

                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#C1C7D0', bottom: hp(1.4), paddingLeft: wp(-1) }}
                        placeholder={'India'}
                        placeholderTextColor={colorpath.btncolor}
                        fontWeight={'600'}
                    />
                    <Text style={{ marginTop: hp(1.7) }}>Shipping Option</Text>
                    <Image source={ImagePath.downarrow} style={{ alignSelf: 'flex-end', top: hp(2.9) }} />

                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#C1C7D0', bottom: hp(1.8), paddingLeft: wp(-1) }}
                        placeholder={'Standard Delivery  ( + $24.00 )'}
                        placeholderTextColor={colorpath.btncolor}
                        fontWeight={'600'}
                    />

                </View>


                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
                    <TouchableOpacity onPress={()=>setcheck(!uncheck)}>
                    <Image
                        source={uncheck? ImagePath.ryticon:ImagePath.TickSquare}
            
                    />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: wp(2.5) }}>Save details for future billing address</Text>
                </View>


            </View>


            <Custombtn 
            textcolor={'#fff'}
            bgcolor={colorpath.btncolor}
            title={'Continue to Payment'}
            margintop={hp(10)}
            onPress={()=>navigation.navigate('PaymentMethod')}
            />







        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },
    shippingstyl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp(3.9),
        paddingHorizontal: wp(12)
    },
    mainView: {

        marginTop: hp(4),
        marginHorizontal: wp(12)

    },
    inputstyle: {
        marginTop: hp(2.8),


    }






})
export default BillingScreen;
