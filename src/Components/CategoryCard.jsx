import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'


const CategoryCard = ({category, navigation}) => {
    return (
        <View style={styles.categoryCardContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate('ProductCategories', {category: category.name})}>
                <View style={styles.categoryCard}>
                    <Image source={{uri: category.imageUrl}} style={styles.categoryImage}/>
                    <Text>{category.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default CategoryCard

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