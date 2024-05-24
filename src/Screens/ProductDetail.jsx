import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../Constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../Features/User/userSlice'

const ProductDetail = ({ route }) => {
    const { product } = route.params
    const dispatch = useDispatch()
    const { favorites, user } = useSelector((state) => state.auth.value)

    const isFavorite = favorites.some((item) => item.id === product.id)

    const toggleFavorite = () => {
        if (!user) {
            alert("Usuario no autenticado. Debes iniciar sesión para añadir a favoritos.")
            return
        }
        if (isFavorite) {
            dispatch(removeFromFavorites({ productId: product.id }))
        } else {
            dispatch(addToFavorites({ product: product }))
        }
    }

    return (
        <View style={styles.detailScreen}>
            <View style={styles.titleAndFav}>
                <Text style={styles.detailTitle}>{product.name}</Text>
                <TouchableOpacity style={styles.favIcon} onPress={toggleFavorite}>
                    <Ionicons
                        name={isFavorite ? "heart-sharp" : "heart-outline"}
                        size={24}
                        color={isFavorite ? colors.color2 : colors.color4}
                    />
                </TouchableOpacity>
            </View>
            <Image style={styles.detailImage} source={{uri: product.imageUrl}}/>
            <Text style={styles.detailDescription}>{product.description}</Text>
            <TouchableOpacity style={styles.bookButton}><Text style={styles.buttonText}>RESERVAR</Text></TouchableOpacity>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
        detailScreen:{
        flex: 1,
    },
    detailTitle:{
        textAlign: "center",
        padding: 20,
        fontWeight: "500",
        fontSize: 18
    },
    detailImage:{
        width: "90%",
        height: "45%",
        alignSelf: "center",
    },
    titleAndFav:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
    favIcon:{
        alignSelf: "center"
    },
    detailDescription:{
        width: "90%",
        alignSelf: "center",
        paddingTop: 15,
        fontSize: 16,
        fontStyle: "italic",
        fontWeight: "400"
    },
    bookButton:{
        paddingHorizontal: 50,
        paddingVertical: 20,
        alignSelf: "center",
        marginTop: 50,
        backgroundColor: colors.color2,
        borderRadius: 6,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
    },
    buttonText:{
        color: colors.color0
    }

})