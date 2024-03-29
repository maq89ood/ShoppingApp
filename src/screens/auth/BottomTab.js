import React, { useEffect } from 'react'
import { Text, View ,TouchableOpacity, Image, ImageBackground} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fs,
} from "react-native-responsive-dimensions";
import Home from './Home';
import WishList from './WishList';
import ImagePath from '../../asstes/ImagePath';
import Search from './Search';
import MyAcoount from './MyAcoount';
import Cart from './Cart';


    const Tab = createBottomTabNavigator();

    function BottomTab() {


      return (


                <Tab.Navigator
        initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"000000",
        tabBarInactiveTintColor:"ADADAD",
        tabBarStyle: { position: 'absolute' },
        tabBarLabelStyle:{fontSize:33,}}}
        
        >


            <Tab.Screen
        name="home"
        component={Home}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
          <Image style={{marginTop:hp(6),tintColor:focused ? '#000000':'#ADADAD'}} source={ImagePath.homeicon}/>
            
          ),
        }}
      />

<Tab.Screen
       name="search"

        component={Search}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
          <Image style={{marginTop:hp(6),tintColor:focused ? '#000000':'#ADADAD'}} source={ImagePath.searchicon}/>
            
          ),
        }}
      />

<Tab.Screen
       name="cart"

        component={Cart}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
          <Image style={{marginTop:hp(6),tintColor:focused ? '#000000':'#ADADAD'}} source={ImagePath.shoppingcart}/>
            
          ),
        }}
      />

<Tab.Screen
         name="wishlist"

        component={WishList}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
          <Image style={{marginTop:hp(6),tintColor:focused ? '#000000':'#ADADAD'}} source={ImagePath.hearticon}/>
            
          ),
        }}
      />

<Tab.Screen
      name="myaccount"

        component={MyAcoount}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
          <Image style={{marginTop:hp(6),tintColor:focused ? '#000000':'#ADADAD'}} source={ImagePath.profileicon}/>
            
          ),
        }}
      />









        </Tab.Navigator>
  
      );
    }
        
export default BottomTab