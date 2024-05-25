import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { colors } from '../Constants/colors'

const Favorites = ({navigation}) => {

    const { favorites } = useSelector((state) => state.auth.value)
    const {user} = useSelector(state => state.auth.value)

    return (
        <View style={styles.container}>
            {favorites.length === 0 ? (
                <View style={styles.containerNoFav}>
                    {user ?
                    <Text style={styles.noFavoritesText}>Todavía no hay favoritos.</Text>
                    :
                    <View style={styles.containerNoFav}>
                        <Text style={styles.noFavoritesText}>Inicia sesion para agregar favoritos.</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('User')} style={styles.logIn}><Text style={styles.logInText}>Iniciar sesion</Text></TouchableOpacity>
                    </View>
                    }
                    </View>
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
    },
    logIn:{
        padding: 30,
        backgroundColor: colors.color2,
        width: "60%",
        alignSelf: "center",
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 3,
    },
    logInText:{
        textAlign: "center",
        color: colors.color0,
        fontSize: 18,
    },
    containerNoFav:{
        flex: 1,
        justifyContent: "center",
        gap: 50
    }
})