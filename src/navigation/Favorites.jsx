import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

const Favorites = ({navigation}) => {

    const { favorites } = useSelector((state) => state.auth.value)

    return (
        <View style={styles.container}>
            {favorites.length === 0 ? (
                <Text style={styles.noFavoritesText}>Todavía no hay favoritos.</Text>
            ) : (
                <FlatList
                    style={styles.favList}
                    data={favorites}
                    renderItem={({item}) => <ProductCard product={item} navigation={navigation}/>}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noFavoritesText: {
        fontSize: 18,
        color: 'gray',
    },
    favList:{
        padding: 10
    }
})