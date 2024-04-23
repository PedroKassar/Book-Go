import { SafeAreaView, StyleSheet, Platform, StatusBar, } from 'react-native';
import { colors } from './src/Constants/colors';
import React from 'react'
import TabNavigator from './src/Navigation/TabNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator/>
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
