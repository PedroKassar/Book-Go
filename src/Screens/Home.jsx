import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import categoriesData from '../Data/categoriesData'
import CategoryCard from '../Components/CategoryCard'
import { colors } from '../Constants/colors'

const Home = ({navigation}) => {
    return (
        <View style={styles.homeContainer}>
            <FlatList 
                data={categoriesData}
                renderItem={({item}) => <CategoryCard category={item} navigation={navigation}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        height: "100%",
        width: "100%",
        backgroundColor: colors.color1,
    },

})