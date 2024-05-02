import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'

const Product = ({product}) => {
    return (
        <View style={styles.productCardContainer}>
            <View style={styles.productCard}>
                    <Image source={{uri: product.imageUrl}} style={styles.productImage}/>
                    <Text style={styles.productText}>{product.name}</Text>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    productCardContainer:{
        width: "100%",
    },
    productImage:{
        padding: "20%",
        borderRadius: 10,
    },
    productCard:{
        flexDirection: "row",
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
        gap: "40%",
    },
    productText:{
        width: "40%"
    }
})