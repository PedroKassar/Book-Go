import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import categoriesProductsData from '../Data/categoriesProductsData.json'
import CategoriesProduct from '../Components/CategoriesProduct'
import { colors } from '../Constants/colors'

const ProductCategories = ({navigation, route}) => {

    const {category} = route.params
    const filteredProducts = categoriesProductsData.filter(product => product.category === category)

    return (
        <View style={styles.productCategoriesContainer}>
            <FlatList
                data={filteredProducts}
                renderItem={({item}) => <CategoriesProduct productCategory={item}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
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