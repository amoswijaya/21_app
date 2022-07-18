import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Home from './pages/Home';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060D2D',
    marginTop: StatusBar.currentHeight,
  },
});
