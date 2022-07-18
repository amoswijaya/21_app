import { View, Text, StyleSheet } from 'react-native';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <View>
      <SearchBar />
      <View style={styles.viewContainer}>
        <Text style={styles.textStyle}>Now Showing</Text>
      </View>
      <Banner />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewContainer: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
