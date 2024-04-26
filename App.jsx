import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import { colors } from './src/Constants/colors';
import React from 'react'
import TabNavigator from './src/Navigation/TabNavigator';

export default function App() {
  return (
    <View style={styles.container} forceInset={{ bottom: 'never' }}>
      <TabNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 40
  },
});
