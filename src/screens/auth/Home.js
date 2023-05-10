import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colorpath from "../../asstes/ColorPath";
import ImagePath from "../../asstes/ImagePath";

import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import CustomHeader3 from "../../component/CustomHeader3";
import ModalScreen from "./ModalScreen";

const Home = () => {
    const navigation = useNavigation();
    const [product, setproduct] = useState([]);

    useEffect(() => {
        GetProdut();
    }, [])


    const GetProdut = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setproduct(json))
    }

    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    return (

        <View style={styles.container}>
            <ScrollView>

                <CustomHeader3
                    onPress={() => openDrawer()}
                    menubtn={ImagePath.menubtn}
                    likebtn={ImagePath.hearticon}
                />




                <ImageBackground style={styles.bgimgstyle} source={ImagePath.homepic}>
                    <View style={{ marginHorizontal: wp(4.5), marginTop: hp(6.8) }}>
                        <Text style={{ color: colorpath.bgcolor, fontSize: fs(1.4) }}>SPORT COLLECTION</Text>
                        <Text style={{ color: colorpath.bgcolor, marginBottom: (1) }}>_______</Text>
                        <Text style={{ color: colorpath.bgcolor, fontSize: fs(4), fontWeight: '600' }}>20% OFF</Text>
                        <Text style={{ color: colorpath.bgcolor, fontWeight: '600' }}>For Selected Sport Style </Text>
                    </View>

                    <TouchableOpacity style={styles.buybtn}>
                        <Text style={{ color: colorpath.btncolor, fontWeight: '500', fontSize: fs(1.6) }}>Shop Now</Text>
                    </TouchableOpacity>
                    <Image style={{ bottom: hp(3) }} source={ImagePath.groupp} />
                </ImageBackground>

                <ModalScreen
                />

                <View style={{ paddingHorizontal: wp(4) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: colorpath.btncolor, fontSize: fs(2.8), fontWeight: '600' }}>Best of OD</Text>
                        <Text>Show all</Text>
                    </View>

                    <View style={{ marginTop: hp(1) }}>

                        <FlatList data={product} showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {

                                return (
                                    <View style={styles.productitem}>
                                        <Image source={{ uri: item.image }} style={{ width: wp(30), height: hp(30), resizeMode: 'contain' }} />

                                        <View style={{ marginTop: hp(3), marginHorizontal: wp(4) }}>
                                            <Text style={styles.productname}>{item.title.length > 25 ? item.title.substring(0, 25) + '.....' : item.title}</Text>
                                            <Text style={styles.dscption}>{item.description.length > 30 ? item.description.substring(0, 30) + '....' : item.description}</Text>
                                            <Text style={styles.price}>{'$' + item.price}</Text>


                                        </View>

                                    </View>

                                )
                            }}
                        />
                    </View>



                </View>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colorpath.bgcolor,
    },

    buybtn: {
        width: wp(22), height: hp(3.7),
        backgroundColor: '#FFFFFF',
        borderRadius: fs(3),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: hp(5.9)
    },
    bgimgstyle: {
        width: wp(92), height: hp(33),
        alignSelf: 'center',
        bottom: hp(2),
        paddingHorizontal: wp(5)
    },
    newbtntxt: {
        width: wp(14), height: hp(2),
        backgroundColor: '#fff',
        marginTop: hp(17.3),
        borderRadius: fs(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    producttxtstyle: {
        color: colorpath.btncolor,
        fontWeight: '600',
        color: colorpath.btncolor,
        fontWeight: '500',
    },
    ImageBackgroundstyle: {
        width: wp(100), height: hp(24),
        alignSelf: 'center',
        marginTop: hp(2.5),
        alignItems: 'center',
        justifyContent: 'center'

    },
    mainview: {
        marginTop: hp(2.5),
        paddingHorizontal: wp(5)
    },

    slidderstyle: {
        width: wp(25), height: hp(3.9),
        backgroundColor: '#F7F8FB',
        borderRadius: fs(3),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp(2),

    },
    heartstyle: {
        width: wp(4), height: hp(2),
        marginTop: hp(2.3),
        alignSelf: 'flex-end',

    },
    producttxt: {
        color: colorpath.btncolor,
        fontWeight: '400',
        marginTop: hp(.6)
    },



    productitem: {
        flexDirection: 'row',
        width: wp(100),
        height: hp(25),
        marginTop: hp(4),
        backgroundColor: 'rgba(168, 132, 151, 0.08)'

    },


    productname: {
        fontSize: fs(2),
        color: colorpath.btncolor,
        fontWeight: '600'
    },
    dscption: {
        marginTop: hp(.4)
    },

    price: {
        fontSize: fs(2.5),
        color: 'green',
        fontWeight: '700'
    }


})

export default Home;
