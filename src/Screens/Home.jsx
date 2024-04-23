import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import categoriesData from '../Data/categoriesData'
import CategoryCard from '../Components/CategoryCard'
import { colors } from '../Constants/colors'
import productsData from '../Data/productsData.json'
import ProductCard from '../Components/ProductCard'

const Home = ({navigation, searchTerm}) => {
    const [filteredSearch, setFilteredSearch] = useState(productsData);

    useEffect(() => {
        if (searchTerm) {
            const filtered = productsData.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredSearch(filtered);
        } else {
            setFilteredSearch(productsData);
        }
    }, [searchTerm]);

    return (
        <View style={styles.homeContainer}>
                {!searchTerm &&(
                    <FlatList 
                        data={categoriesData}
                        renderItem={({item}) => <CategoryCard category={item} navigation={navigation}/>}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                    />
                )}
                {searchTerm &&(
                    <FlatList 
                        data={filteredSearch}
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

})