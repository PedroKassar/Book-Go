import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Header from '../Components/Header'
import Products from '../Screens/Products'
import ProductDetail from '../Screens/ProductDetail'


const Stack = createNativeStackNavigator()

const Navigator = () => {

    const [searchFilteredProducts, setSearchFilteredProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    return (
            <Stack.Navigator initialRouteName="Home">    
                <Stack.Screen name="Home" options={({navigation}) => ({header: ()=> <Header navigation={navigation} setSearchFilteredProducts={setSearchFilteredProducts} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>})}>
                    {props => <Home {...props} searchFilteredProducts={searchFilteredProducts} searchQuery={searchQuery}/>} 
                </Stack.Screen>
                <Stack.Screen name="Products" options={({navigation}) => ({header: ()=> <Header navigation={navigation} setSearchFilteredProducts={setSearchFilteredProducts} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>})}>
                    {props => <Products {...props} searchFilteredProducts={searchFilteredProducts} searchQuery={searchQuery}/>}
                </Stack.Screen>
                <Stack.Screen name="ProductDetail" component={ProductDetail} options={({navigation}) => ({header: ()=> <Header navigation={navigation}/>})}/>
            </Stack.Navigator>
    )
}

export default Navigator

const styles = StyleSheet.create({
})

