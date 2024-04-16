import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { colors } from '../Constants/colors';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.searcher}>
                <EvilIcons style={styles.searcherIcons} name="search" size={24} color="black" />
                <TextInput style={styles.searcherInput} placeholder='Busca que reservar'/>
            </View>
            <MaterialIcons style={styles.searcherIcons} name="schedule" size={24} color={colors.color0} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: colors.color2
    },
    searcher:{
        flexDirection: "row",
        padding: 5,
        borderRadius: 10,
        width: "80%",
        backgroundColor: colors.color0,
        height: "50%",
        alignSelf: "center"
    },
    searcherIcons:{
        alignSelf: "center",
    },
    searcherInput:{
        paddingHorizontal: 5
    }
})