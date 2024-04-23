import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import ProductCategories from '../Screens/ProductCategories'
import Header from '../Components/Header'
import Products from '../Screens/Products'
import productsData from '../Data/productsData.json'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredSearch, setFilteredSearch] = useState(productsData)

    const handleSearch = (term) => {
        setSearchTerm(term)
        const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(term.toLowerCase()))
        setFilteredSearch(filteredProducts)
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">    
                <Stack.Screen name="Home" options={({navigation}) => ({header: ()=> <Header navigation={navigation} handleSearch={handleSearch} searchTerm={searchTerm}/>})}>
                {props => <Home {...props} handleSearch={handleSearch} searchTerm={searchTerm}/>}
                </Stack.Screen>
                <Stack.Screen name="ProductCategories" component={ProductCategories} options={({navigation}) => ({header: ()=> <Header navigation={navigation} handleSearch={handleSearch} searchTerm={searchTerm}/>})}/>
                <Stack.Screen name="Products" component={Products} options={({navigation}) => ({header: ()=> <Header navigation={navigation} handleSearch={handleSearch} searchTerm={searchTerm}/>})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({
})