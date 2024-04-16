import { SafeAreaView, StyleSheet, Platform, StatusBar, } from 'react-native';
import Home from './src/Screens/Home';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import { colors } from './src/Constants/colors';
import ProductCategories from './src/Screens/ProductCategories';
import Navigator from './src/Navigation/Navigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
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
