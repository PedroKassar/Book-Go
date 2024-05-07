import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../Constants/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignUpMutation } from '../Services/authApi'
import { setUser } from '../Features/User/userSlice'
import { useDispatch } from 'react-redux'


const SignUp = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [triggerSignUp, result] = useSignUpMutation()

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        triggerSignUp({email, password, returnSecureToken: true})
    }

    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle}>Sign Up</Text>
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
                <InputForm
                    label={"confirm password"}
                    onChange={setConfirmPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title = "Sign Up"
                />
                <View style={styles.toLogin}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text style={styles.toLoginButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    signUpContainer:{
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
    signUpTitle:{
        fontSize: 26,
        fontWeight: "600",
        textAlign: "center",
        paddingVertical: 20,
        backgroundColor: colors.color2,
        width: "100%",
        height: "10%",
        color: colors.color0
    },
    toLogin:{
        flexDirection: "row"
    },
    toLoginButton:{
        paddingHorizontal: 10,
        color: colors.color2
    }
})