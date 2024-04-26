import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../Constants/colors'
import Notifications from './Notifications'
import Favorites from './Favorites'
import Menu from './Menu'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: styles.tabBar}}>
                <Tab.Screen name="Navigator" component={Navigator} options={{tabBarIcon: ()=>(<Ionicons name="home-outline" size={24} color={colors.color2}/>)}}/>
                <Tab.Screen name="Favorites" component={Favorites} options={{tabBarIcon: ()=>(<Ionicons name="heart-outline" size={24} color={colors.color2}/>)}}/>
                <Tab.Screen name="Notifications" component={Notifications} options={{tabBarIcon: ()=>(<Ionicons name="notifications-outline" size={24} color={colors.color2}/>)}}/>
                <Tab.Screen name="Menu" component={Menu} options={{tabBarIcon: ()=>(<SimpleLineIcons name="menu" size={24} color={colors.color2}/>)}}/>
            </Tab.Navigator>
        </NavigationContainer>
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