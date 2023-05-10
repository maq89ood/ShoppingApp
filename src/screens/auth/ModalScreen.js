import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePath from '../../asstes/ImagePath';
import colorpath from '../../asstes/ColorPath';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
const ModalScreen = ({ visible, onClose, message }) => {
    const [modalVisible, setModalVisible] = useState(visible);

    // Set modal visible when component props change
    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    // Close modal when close button is pressed
    const handleClose = () => {
        setModalVisible(false);

    };
    const colsebtn = () => {
        onClose();
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={colsebtn}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(245, 235, 240, 0.38)' }}>
                <ImageBackground style={{ width: wp(95), height: hp(44),padding:wp(3) }} source={ImagePath.bigbillionday}>
                    <TouchableOpacity onPress={handleClose}>
                        <Image style={{ alignSelf: 'flex-end', tintColor:'#fff'}} source={ImagePath.crossicon} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    bgimgstyle: {
        width: wp(93), height: hp(33)
    }
})
export default ModalScreen;
