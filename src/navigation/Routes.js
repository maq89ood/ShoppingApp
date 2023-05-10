// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splace from '../screens/Splace';
import Intro from '../screens/Intro';
import SignIn from '../screens/auth/SignIn';
import SignUpp from '../screens/auth/SignUpp';
import ForgotScreen from '../screens/auth/ForgotScreen';
import ResetSuccess from '../screens/auth/ResetSuccess';
import Otp from '../screens/auth/Otp';
import BillingScreen from '../screens/auth/BillingScreen';
import PaymentMethod from '../screens/auth/PaymentMetod';
import SuccessOrder from '../screens/auth/SuccessOrder';
import Search from '../screens/auth/Search';
import Cart from '../screens/auth/Cart';
import WishList from '../screens/auth/WishList';
import MyAcoount from '../screens/auth/MyAcoount';
import Category from '../screens/auth/Category';
import CategoryItem from '../screens/auth/CategoryItem';
import Home from '../screens/auth/Home';
import Detail from '../screens/auth/Detail';
import BottomTab from '../screens/auth/BottomTab';
import ModalScreen from '../screens/auth/ModalScreen';
import About from '../screens/auth/About';
import { createDrawerNavigator } from '@react-navigation/drawer';






const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='' screenOptions={{ headerShown: false }}>

                <Stack.Screen
                    name="Splace"
                    component={Splace} />

                <Stack.Screen
                    name="Intro"
                    component={Intro} />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn} />

                <Stack.Screen
                    name="SignUpp"
                    component={SignUpp} />
                <Stack.Screen
                    name="ForgotScreen"
                    component={ForgotScreen} />

                <Stack.Screen
                    name="ResetSuccess"
                    component={ResetSuccess} />

                <Stack.Screen
                    name="Otp"
                    component={Otp} />

                <Stack.Screen
                    name="BillingScreen"
                    component={BillingScreen} />

                <Stack.Screen
                    name="PaymentMethod"
                    component={PaymentMethod} />

                <Stack.Screen
                    name="SuccessOrder"
                    component={SuccessOrder} />

                <Stack.Screen
                    name="Search"
                    component={Search} />

                <Stack.Screen
                    name="Cart"
                    component={Cart} />

                <Stack.Screen
                    name="WishList"
                    component={WishList} />

                <Stack.Screen
                    name="MyAcoount"
                    component={MyAcoount} />

                <Stack.Screen
                    name="Category"
                    component={Category} />

                <Stack.Screen
                    name="CategoryItem"
                    component={CategoryItem} />

                <Stack.Screen
                    name="Home"
                    component={HeaderDrawer} />

                <Stack.Screen
                    name="Detail"
                    component={Detail} />

                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab} />

                <Stack.Screen
                    name="ModalScreen"
                    component={ModalScreen} />

                <Stack.Screen
                    name="About"
                    component={About} />

               

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();

const HeaderDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                options={{ headerShown: false }}
                name="About" component={About}
            />
        </Drawer.Navigator>


    )
}




export default Routes;