import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../Constants/colors';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Ionicons name="home-outline" size={24} color={colors.color1} />
            <Ionicons name="heart-outline" size={24} color={colors.color1} />
            <Ionicons name="notifications-outline" size={24} color={colors.color1} />
            <SimpleLineIcons name="menu" size={24} color={colors.color1} />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer:{
        height: "7%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: colors.color2,
        alignItems: "center",
        borderTopWidth: 2,
        borderTopColor: colors.color3,
        
    }
})