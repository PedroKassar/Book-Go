import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../Constants/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignUpMutation } from '../Services/authApi'
import { setUser } from '../Features/User/userSlice'
import { useDispatch } from 'react-redux'
import { signUpSchema } from '../Validations/signUpSchema'


const SignUp = ({navigation}) => {

    const [triggerSignUp, result] = useSignUpMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMail, setErrorMail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

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
        try {
            const validation = signUpSchema.validateSync({email, password, confirmPassword})
            triggerSignUp({email, password, returnSecureToken: true})
        } catch (err) {
            switch (err.path) {
                case 'email':
                    setErrorMail(err.message)
                    break;
                case 'password':
                    setErrorPassword(err.message)
                    break;
                case 'confirmPassword':
                    setErrorConfirmPassword(err.message)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle}>Sign Up</Text>
            <View style={styles.inputsContainer}>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={errorMail}
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setConfirmPassword}
                    error={errorConfirmPassword}
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