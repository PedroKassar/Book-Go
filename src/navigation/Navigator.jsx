import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import ProductCategories from '../Screens/ProductCategories'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer style={styles.navContainer}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={({navigation}) => ({header: ()=> <Header navigation={navigation}/>})}/>
                <Stack.Screen name="ProductCategories" component={ProductCategories} options={({navigation}) => ({header: ()=> <Header navigation={navigation}/>})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({
    navContainer:{

    }
})