import { FlatList, StyleSheet, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductCard from '../Components/ProductCard'
import { colors } from '../Constants/colors'
import SubCategory from '../Components/SubCategory'
import { useGetSubCategoriesByCategoryQuery, useGetProductsByCategoryQuery } from '../Services/shopApi'

const Products = ({navigation, route, searchQuery, searchFilteredProducts}) => {

    const {category} = route.params
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const subCategoriesQuery = useGetSubCategoriesByCategoryQuery(category)
    const productsQuery = useGetProductsByCategoryQuery(category)

    const subCategories = subCategoriesQuery.data ?? []
    const products = productsQuery.data ?? []
    const filteredProducts = selectedSubCategory ? products.filter(product => product.category === category && product.subCategory === selectedSubCategory) : products.filter(product => product.category === category)

    const handleSubCategoryPress = (subCategoryName, selected) =>{
        if (selected) {
            setSelectedSubCategory(subCategoryName)
        } else if (subCategoryName === selectedSubCategory){
            setSelectedSubCategory(null)
        }
    }
    

    return (
        <View>
            {!searchQuery &&(            
                <FlatList style={styles.subCategoriesContainer}
                    data={subCategories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <SubCategory subCategory={item} onPress={handleSubCategoryPress} selected={item.name === selectedSubCategory}/>}
                    keyExtractor={item => item.id.toString()}
                />
            )}
            {!searchQuery &&(            
                <FlatList style={styles.productsContainer}
                    data={filteredProducts}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => <ProductCard product={item} navigation={navigation}/>}
                    keyExtractor={item => item.id.toString()}
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

export default Products

const styles = StyleSheet.create({
    productsContainer:{
        height: "90%",
        width: "100%",
        backgroundColor: colors.color1,
    },
    subCategoriesContainer:{
        height: "10%",
        backgroundColor: colors.color0
    }
})