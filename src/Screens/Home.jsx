import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from '../Components/CategoryCard'
import { colors } from '../Constants/colors'
import ProductCard from '../Components/ProductCard'
import { useGetCategoriesQuery } from '../Services/shopApi'
import Map from '../Components/Map'

const Home = ({navigation, searchFilteredProducts, searchQuery }) => {
    const {data: categories, error, isLoading} = useGetCategoriesQuery()

    return (
        <View style={styles.homeContainer}>
            {!searchQuery &&(
                <View style={styles.mapContainer}>
                    <Map/>
                </View>
            )}
            {!searchQuery &&(
                <FlatList
                    data={categories}
                    renderItem={({item}) => <CategoryCard category={item} navigation={navigation}/>}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    />
            )}
            {searchQuery &&(
                <FlatList
                    data={searchFilteredProducts}
                    renderItem={({item}) => <ProductCard product={item} navigation={navigation}/>}
                    keyExtractor={item => item.id.toString()}
                    numColumns={1}
                />
            )}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        height: "100%",
        width: "100%",
        backgroundColor: colors.color1,
    },
    mapContainer:{
        height: "30%",
        marginTop: 20
    },
})