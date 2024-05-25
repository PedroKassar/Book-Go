import { StyleSheet } from 'react-native'
import React, { useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession, fetchFavorites } from '../Persistence'
import { setUser, setFavorites } from '../Features/User/userSlice'

const MainNavigator = () => {
    const dispatch = useDispatch()
    const localId = useSelector((state) => state.auth.value.localId)

    useEffect(()=> {
        (async ()=> {
            try {
                const response = await fetchSession()
                if (response.rows._array.length) {
                    const user = response.rows._array[0]
                    dispatch(setUser({
                        email: user.email,
                        localId: user.localId,
                        idToken: user.token
                    }))
                }
                if (localId) {
                    const favResponse = await fetchFavorites(localId)
                    if (favResponse.rows._array.length) {
                        const favorites = favResponse.rows._array.map(item => JSON.parse(item.product))
                        dispatch(setFavorites(favorites))
                    }
                }
            } catch (error) {
            }   
        })()
    }, [dispatch, localId])

    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})