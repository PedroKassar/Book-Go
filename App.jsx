import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { colors } from './src/Constants/colors';
import React from 'react'
import MainNavigator from './src/Navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Store'

export default function App() {
  return (
    <View style={styles.container} forceInset={{ bottom: 'never' }}>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
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
})
