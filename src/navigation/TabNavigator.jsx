import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { colors } from '../Constants/colors'
import Notifications from './Notifications'
import Favorites from './Favorites'
import User from './User'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: styles.tabBar}}>
                <Tab.Screen name="Navigator" component={Navigator} options={{tabBarIcon: ({focused})=>(<Ionicons name="home-outline" size={24} color={focused ? colors.color3 : colors.color2}/>)}}/>
                <Tab.Screen name="Favorites" component={Favorites} options={{tabBarIcon: ({focused})=>(<Ionicons name="heart-outline" size={24} color={focused ? colors.color3 : colors.color2}/>)}}/>
                <Tab.Screen name="Notifications" component={Notifications} options={{tabBarIcon: ({focused})=>(<Ionicons name="notifications-outline" size={24} color={focused ? colors.color3 : colors.color2}/>)}}/>
                <Tab.Screen name="User" component={User} options={{tabBarIcon: ({focused})=>(<SimpleLineIcons name="user" size={24} color={focused ? colors.color3 : colors.color2}/>)}}/>
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