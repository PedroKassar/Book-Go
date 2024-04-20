import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from '../Components/ProductCard'
import productsData from '../Data/productsData.json'
import { colors } from '../Constants/colors'

const Products = ({navigation, route}) => {

    const {category} = route.params
    const filteredProducts = productsData.filter(product => product.category === category)

    return (
        <View>
            <FlatList style={styles.productsContainer}
                data={filteredProducts}
                renderItem={({item}) => <ProductCard product={item} navigation={navigation}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    productsContainer:{
        height: "100%",
        width: "100%",
        backgroundColor: colors.color1,
    }
})