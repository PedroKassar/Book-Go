import { FlatList, StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import ProductCard from '../Components/ProductCard'
import productsData from '../Data/productsData.json'
import { colors } from '../Constants/colors'
import subCategoriesData from '../Data/subCategoriesData.json'
import SubCategory from '../Components/SubCategory'

const Products = ({navigation, route, }) => {

    const {category} = route.params
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const filteredSubCategories = subCategoriesData.filter(subCategory => subCategory.category === category)
    const filteredProducts = selectedSubCategory ? productsData.filter(product => product.category === category && product.subCategory === selectedSubCategory) : productsData.filter(product => product.category === category)

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
                data={filteredSubCategories}
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