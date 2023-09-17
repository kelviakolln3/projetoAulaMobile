import React, {useEffect, useState} from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigation} from "@react-navigation/bottom-tabs"

import Login from "./pages/login";
import { UseSelector } from "react-redux";
import { UserService } from "./services";
import { Store } from "./store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigation();

export default function App(){
    const BottomTabNavigator = () =>{
        return (
            <Tab.Navigator>
                <Tab.Screen name = "Home" component = {Home}/>
                <Tab.Screen name = "Notas" component = {Notas} options = {{title: 'Notas'}}/>
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = {Store.getState()[UserService.reducerKey]?.token
                ?BottomTabNavigator
                : 'Login'
            }>
            </Stack.Navigator>
        </NavigationContainer>
    );
}