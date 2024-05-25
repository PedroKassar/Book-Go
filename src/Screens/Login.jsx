import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Constants/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../Services/authApi'
import { setUser } from '../Features/User/userSlice'
import { insertSession } from '../Persistence'

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [triggerSignIn, result] = useLoginMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken,
            })
                .then((response) => {
                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                        })
                    )
                })
                .catch((err) => {
                })
        } else if (result?.error) {
            setError(result.error.message || "email o contraseña incorrecto")
        }
    }, [result])

    const onSubmit = () => {
        setError('')
        triggerSignIn({email, password})
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.inputsContainer}>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={""}
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <SubmitButton
                    onPress={onSubmit}
                    title = "Login"
                />
                <View style={styles.toSignUp}>
                    <Text>Not have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                        <Text style={styles.toSignUpButton}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.color2
    },
    inputsContainer:{
        width: "100%",
        height: "90%",
        backgroundColor: colors.color1,
        padding: 30,
        gap: 20,
        borderTopLeftRadius: 60,
        paddingTop: "15%"
    },
    loginTitle:{
        fontSize: 26,
        fontWeight: "600",
        textAlign: "center",
        paddingVertical: 20,
        backgroundColor: colors.color2,
        width: "100%",
        height: "10%",
        color: colors.color0
    },
    toSignUp:{
        flexDirection: "row"
    },
    toSignUpButton:{
        paddingHorizontal: 10,
        color: colors.color2
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    }
})