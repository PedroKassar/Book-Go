import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import categoriesProductsData from '../Data/categoriesProductsData.json'
import CategoriesProduct from '../Components/CategoriesProduct'
import { colors } from '../Constants/colors'
import productsData from '../Data/productsData.json'

const ProductCategories = ({navigation, route}) => {

    const {category} = route.params
    const combinedData = categoriesProductsData.concat(productsData)
    const filteredProductCategories = combinedData.filter(product => product.category === category)
    
    const isGastronomia = category === "Gastronomia"
    
    return (
        <View style={styles.productCategoriesContainer}>
            {!isGastronomia &&(            
            <FlatList
                data={filteredProductCategories}
                renderItem={({item}) => <CategoriesProduct productCategory={item} navigation={navigation}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
            )}
            {isGastronomia &&(
            <FlatList
                data={filteredProductCategories}
                renderItem={({item}) => <CategoriesProduct productCategory={item} navigation={navigation}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={1}
            />
            )}
        </View>
    )
}

export default ProductCategories

const styles = StyleSheet.create({
    productCategoriesContainer:{
        height: "100%",
        width: "100%",
        backgroundColor: colors.color1,
    }
})