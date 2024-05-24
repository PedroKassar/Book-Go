import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, EvilIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../Constants/colors';
import { useGetProductsQuery } from '../Services/shopApi';

const Header = ({navigation, setSearchFilteredProducts, setSearchQuery, searchQuery}) => {
    
    const {data: products, error, isLoading} = useGetProductsQuery()
    const goBackButton = navigation.canGoBack()

    const handleSearch = (text) => {
        setSearchQuery(text)
        const searchFilteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase()
            const searchLetters = text.toLowerCase()
            return productName.startsWith(searchLetters)
        })
        setSearchFilteredProducts(searchFilteredProducts)
    }

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>{goBackButton && <AntDesign name="back" size={24} color={colors.color0} />}</TouchableOpacity>
            <View style={styles.searcher}>
                <EvilIcons style={styles.searcherIcons} name="search" size={24} color="black" />
                <TextInput style={styles.searcherInput} placeholder='Busca que reservar' value={searchQuery} onChangeText={handleSearch} />
            </View>
            <MaterialIcons style={styles.searcherIcons} name="schedule" size={24} color={colors.color0} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: colors.color2,
        padding: 10
    },
    searcher:{
        flexDirection: "row",
        padding: 5,
        borderRadius: 10,
        backgroundColor: colors.color0,
        height: "100%",
        alignSelf: "center"
    },
    searcherIcons:{
        alignSelf: "center",
    },
    searcherInput:{
        paddingHorizontal: 5,
        width: "75%",
    }
})