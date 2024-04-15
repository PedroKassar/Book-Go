import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import categoriesData from '../Data/categoriesData'
import CategorieCard from '../Components/CategorieCard'
import { colors } from '../Constants/colors'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <FlatList 
                data={categoriesData}
                renderItem={({item}) => <CategorieCard categorie={item}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        height: "83%",
        width: "100%",
        backgroundColor: colors.color1,
    },

})