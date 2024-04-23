import { SafeAreaView, StyleSheet, Platform, StatusBar, } from 'react-native';
import Footer from './src/Components/Footer';
import { colors } from './src/Constants/colors';
import Navigator from './src/Navigation/Navigator';
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator/>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
