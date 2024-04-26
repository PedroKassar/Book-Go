import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'

const SubCategory = ({subCategory, onPress, selected}) => {
    return (
        <View style={styles.subCategoryContainer}>
            <TouchableOpacity onPress={()=>onPress(subCategory.name, !selected)}>
                <View style={[styles.subCategoryCard, selected && styles.selectedSubCategoryCard]}>
                    <Text style={[styles.subCategoryText, selected && styles.selectedSubCategoryText]}>{subCategory.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SubCategory

const styles = StyleSheet.create({
    subCategoryContainer:{
        flex: 1,
        justifyContent: "center",
    },
    subCategoryCard:{
        paddingHorizontal: 15,
        backgroundColor: colors.color1,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
    },
    subCategoryText:{
        padding: 10
    },
    selectedSubCategoryCard:{
        backgroundColor: colors.color2
    },
    selectedSubCategoryText:{
        color: colors.color0
    }
})