import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'

const CategorieCard = ({categorie}) => {
    return (
        <View style={styles.categorieCardContainer}>
            <View style={styles.categorieCard}>
                <Image source={{uri: categorie.imageUrl}} style={styles.categorieImage}/>
                <Text>{categorie.name}</Text>
            </View>
        </View>
    )
}

export default CategorieCard

const styles = StyleSheet.create({
    categorieCardContainer:{
        width: "50%",
    },
    categorieImage:{
        padding: "40%",
        margin: 10,
    },
    categorieCard:{
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