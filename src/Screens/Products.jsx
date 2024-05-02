import { FlatList, StyleSheet, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductCard from '../Components/ProductCard'
import { colors } from '../Constants/colors'
import SubCategory from '../Components/SubCategory'
import { useGetSubCategoriesByCategoryQuery, useGetProductsByCategoryQuery } from '../Services/shopApi'

const Products = ({navigation, route, }) => {

    const {category} = route.params
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const subCategoriesQuery = useGetSubCategoriesByCategoryQuery(category)
    const productsQuery = useGetProductsByCategoryQuery(category)

    const subCategories = subCategoriesQuery.data ?? []
    const products = productsQuery.data ?? []
    const filteredProducts = selectedSubCategory ? products.filter(product => product.category === category && product.subCategory === selectedSubCategory) : products.filter(product => product.category === category)
        
    useEffect(() => {
        if (subCategoriesQuery.error) {
            console.error('Error fetching subCategories:', subCategoriesQuery.error)
        }
        if (productsQuery.error) {
            console.error('Error fetching products:', productsQuery.error)
        }
    }, [subCategoriesQuery.error, productsQuery.error])

    const handleSubCategoryPress = (subCategoryName, selected) =>{
        if (selected) {
            setSelectedSubCategory(subCategoryName)
        } else if (subCategoryName === selectedSubCategory){
            setSelectedSubCategory(null)
        }
    }
    

    return (
        <View>
            <FlatList style={styles.subCategoriesContainer}
                data={subCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <SubCategory subCategory={item} onPress={handleSubCategoryPress} selected={item.name === selectedSubCategory}/>}
                keyExtractor={item => item.id.toString()}
                />
            <FlatList style={styles.productsContainer}
                data={filteredProducts}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <ProductCard product={item} navigation={navigation}/>}
                keyExtractor={item => item.id.toString()}
            />
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