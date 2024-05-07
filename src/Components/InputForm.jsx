import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Constants/colors'

const InputForm = ({label, onChange, error = "", isSecure = false,}) => {
    
    const [input, setInput] = useState("")
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            {/* <Text>{label}</Text> */}
            <TextInput style={styles.input}
                placeholder={label}
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
            />
            {error ? <Text>{error}</Text> : null}
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width: "100%",
        backgroundColor: colors.color0,
        borderRadius: 5,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        padding: 10
    },
    input:{
        paddingVertical: 5
    }
})