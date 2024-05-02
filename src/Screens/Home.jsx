import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from '../Components/CategoryCard'
import { colors } from '../Constants/colors'
import ProductCard from '../Components/ProductCard'
import { useGetCategoriesQuery, useGetProductsByCategoryQuery } from '../Services/shopApi'

const Home = ({navigation, searchTerm}) => {
    const {data: categories, error, isLoading} = useGetCategoriesQuery()
    const {data: products } = useGetProductsByCategoryQuery()
    const [filteredSearch, setFilteredSearch] = useState(products);

    useEffect(() => {
        if (searchTerm) {
            const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredSearch(filtered);
        } else {
            setFilteredSearch(products);
        }
    }, [searchTerm]);

    return (
        <View style={styles.homeContainer}>
                {!searchTerm &&(
                    <FlatList 
                        data={categories}
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