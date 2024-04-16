import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'

const CategoriesProduct = ({productCategory}) => {
    return (
        <View style={styles.categoryCardContainer}>
            <View style={styles.categoryCard}>
                    <Image source={{uri: productCategory.imageUrl}} style={styles.categoryImage}/>
                    <Text>{productCategory.name}</Text>
            </View>
        </View>
    )
}

export default CategoriesProduct

const styles = StyleSheet.create({
    categoryCardContainer:{
        width: "50%",
    },
    categoryImage:{
        padding: "40%",
        margin: 10,
    },
    categoryCard:{
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
    }
})