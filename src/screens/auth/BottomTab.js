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
        tabBarActiveTintColor:"#000000",
        tabBarStyle: { position: 'absolute' },
        tabBarLabelStyle:{fontSize:33,}
      }}
        >


            <Tab.Screen
        name="home"
        component={Home}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <Image style={{marginTop:hp(6)}} source={ImagePath.homeicon}/>
            
          ),
        }}
      />

<Tab.Screen
       name="search"

        component={Search}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <Image style={{marginTop:hp(6)}} source={ImagePath.searchicon}/>
            
          ),
        }}
      />

<Tab.Screen
       name="cart"

        component={Cart}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <Image style={{marginTop:hp(6)}} source={ImagePath.shoppingcart}/>
            
          ),
        }}
      />

<Tab.Screen
         name="wishlist"

        component={WishList}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <Image style={{marginTop:hp(6)}} source={ImagePath.hearticon}/>
            
          ),
        }}
      />

<Tab.Screen
      name="myaccount"

        component={MyAcoount}
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <Image style={{marginTop:hp(6)}} source={ImagePath.profileicon}/>
            
          ),
        }}
      />









        </Tab.Navigator>
  
      );
    }
        
export default BottomTab