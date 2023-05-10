import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const About = () => {
    const navigation=useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Text>ABout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default About;
