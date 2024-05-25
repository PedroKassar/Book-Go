import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'
import { truncateSessionsTable } from '../Persistence'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../Features/User/userSlice'
import AuthStack from './AuthStack'

const User = () => {

    const dispatch = useDispatch()
    const UserDefaultImage = require("../../assets/userDefault.png")
    const {user} = useSelector(state => state.auth.value)

    const logOut = async () => {
        try{
            const response = await truncateSessionsTable()
            dispatch(clearUser())
        } catch(error){

        }
    }    

    return (
        <View style={styles.userContainer}>
            {user ?             
                <View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageUser} source={UserDefaultImage}/>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                    <TouchableOpacity style={styles.logOut} onPress={logOut}><Text style={styles.logOutText}>Cerrar sesion</Text></TouchableOpacity>
                </View>  
                : 
                <AuthStack/>
            }
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    userContainer:{
        flex: 1,
        justifyContent: "center"
    },
    imageUser:{
        width: "50%",
        height: "50%",
        alignSelf: "center",
        resizeMode: "contain",
    },
    imageContainer:{
        width: "100%",
        height: "70%"
    },
    email:{
        color: "black",
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 20
    },
    logOut:{
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
    logOutText:{
        textAlign: "center",
        color: colors.color0,
        fontSize: 16,
    }
})