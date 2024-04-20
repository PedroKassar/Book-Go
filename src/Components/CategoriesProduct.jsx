import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'

const CategoriesProduct = ({productCategory, navigation}) => {

    const isGastronomia = productCategory.category === "Gastronomia"

    return (
        <View style={styles.maxContainer}>
            {!isGastronomia && (
            <View style={styles.categoriesProductCardContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Products', {category: productCategory.name})}>
                <View style={styles.categoriesProductCard}>
                        <Image source={{uri: productCategory.imageUrl}} style={styles.categoriesProductImage}/>
                        <Text>{productCategory.name}</Text>
                </View>
                </TouchableOpacity>
            </View>
            )}
            {isGastronomia && (
                <View style={styles.categoriesProductCardContainerGastronomy}>
                    <View style={styles.categoriesProductCardGastronomy}>
                        <Image source={{uri: productCategory.imageUrl}} style={styles.categoriesProductImageGastronomy}/>
                        <Text>{productCategory.name}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}

export default CategoriesProduct

const styles = StyleSheet.create({
    maxContainer:{
        width: "50%"
    },
    categoriesProductCardContainer:{
        width: "100%",
    },
    categoriesProductImage:{
        padding: "40%",
        margin: 10,
    },
    categoriesProductCard:{
        alignItems: "center",
        backgroundColor: colors.color0,
        margin:10,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    categoriesProductImageGastronomy:{
        padding:"20%"
    },
    categoriesProductCardGastronomy:{
        alignItems: "center",
        backgroundColor: colors.color0,
        margin:10,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    categoriesProductCardContainerGastronomy:{
        width: "200%"
    }
})