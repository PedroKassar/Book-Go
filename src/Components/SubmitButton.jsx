import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'

const SubmitButton = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    button:{
        padding: 20,
        backgroundColor: colors.color2,
        borderRadius: 5
    },
    buttonText:{
        textAlign: "center",
        color: colors.color0
    }
})