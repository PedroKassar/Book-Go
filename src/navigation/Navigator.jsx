import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Header from '../Components/Header'
import Products from '../Screens/Products'
import { useGetProductsByCategoryQuery } from '../Services/shopApi'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    const {data: products, error, isLoading} = useGetProductsByCategoryQuery()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredSearch, setFilteredSearch] = useState(products)

    const handleSearch = (term) => {
        setSearchTerm(term)
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(term.toLowerCase()))
        setFilteredSearch(filteredProducts)
    }

    return (
            <Stack.Navigator initialRouteName="Home">    
                <Stack.Screen name="Home" options={({navigation}) => ({header: ()=> <Header navigation={navigation} handleSearch={handleSearch} searchTerm={searchTerm}/>})}>
                {props => <Home {...props} handleSearch={handleSearch} searchTerm={searchTerm}/>}
                </Stack.Screen>
                <Stack.Screen name="Products" component={Products} options={({navigation}) => ({header: ()=> <Header navigation={navigation} handleSearch={handleSearch} searchTerm={searchTerm}/>})}/>
            </Stack.Navigator>
    )
}

export default Navigator

const styles = StyleSheet.create({
})