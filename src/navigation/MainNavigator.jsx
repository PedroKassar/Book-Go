import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../Persistence'
import { setUser } from '../Features/User/userSlice'

const MainNavigator = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth.value)

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
            } catch (error) {
            }   
        })()
    }, [])

    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})