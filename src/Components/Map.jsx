import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { useGetProductsQuery } from '../Services/shopApi'

const Map = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const {data: products, error, isLoading} = useGetProductsQuery()

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permiso denegado para acceder a su ubicacion')
                return
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    }, [])

    if (location === null) {
        return <View style={styles.loading}><Text>Cargando mapa...</Text></View>
    }

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map} initialRegion={{latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} showsUserLocation={true}>
                {products && products.map(product => (
                    product.latitude && product.longitude && (
                    <Marker key={product.id} coordinate={{latitude: product.latitude, longitude: product.longitude}} title={product.name} image={require('../../assets/pinMarker.png')} style={{width: 4, height: 4}}/>
                )))}
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    mapContainer:{
        flex: 1,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
    },
    map:{
        width: "95%",
        height: "95%",
        alignSelf: "center",
        borderRadius: 5,
    },
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})