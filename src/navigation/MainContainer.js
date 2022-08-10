import * as React from "react"
import {StyleSheet} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./screens/HomeScreen"
import CitiesScreen from "./screens/CitiesScreen"
import DetailsScreen from "./screens/DetailsScreen"
import ActivitiesScreen from "./screens/ActivitiesScreen"
import AccountScreen from "./screens/AccountScreen"
import SignUpScreen from "./screens/SignUpScreen"

const homeName = "Home"
const citiesName = "Cities"
const detailsName = "Details"
const activitiesName = "Activities"
const accountName = "Account"
const signUpName = "Sign Up"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CitiesHome" component={CitiesScreen} options={{title: "Cities"}}/>
            <Stack.Screen name={detailsName} component={DetailsScreen}/>
            <Stack.Screen name={activitiesName} component={ActivitiesScreen}/>
        </Stack.Navigator>
    )
}

function LogInStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen}/>
            <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? "home" : "home-outline"
                    } else if ( rn === citiesName) {
                        iconName = focused ? "business" : "business-outline"
                    } else if (rn === accountName){
                        iconName = focused ? "person" : "person-outline"
                    } 
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: "#427b92",
                inactiveTintColor: "grey",
                labelStyle:{paddingBottom: 0, fontSize: 15},
                style: {}
            }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown:false}}/>
                <Tab.Screen name="Cities" component={CitiesStack} options={{headerShown:false}}/>
                <Tab.Screen name="Account" component={LogInStack} options={{headerShown:false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}