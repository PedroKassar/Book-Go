import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navigator from './Navigator'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../Constants/colors'
import Favorites from './Favorites'
import User from './User'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: styles.tabBar}}>
                <Tab.Screen name="Navigator" component={Navigator} options={{tabBarIcon: ({focused})=>(<Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color={colors.color2}/>)}}/>
                <Tab.Screen name="Favorites" component={Favorites} options={{tabBarIcon: ({focused})=>(<Ionicons name={focused ? "heart-sharp" : "heart-outline"} size={24} color={colors.color2}/>)}}/>
                <Tab.Screen name="User" component={User} options={{tabBarIcon: ({focused})=>(<Ionicons name={focused ? "person" : "person-outline"} size={24} color={colors.color2}/>)}}/>
            </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.color0,
        borderTopWidth: 2,
        borderTopColor: colors.color2,
    }
})