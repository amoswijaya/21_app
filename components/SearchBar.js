import { View, Text, StyleSheet, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import SearchIcons from '../assets/search.svg';
import { AntDesign } from '@expo/vector-icons';
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <AntDesign name='search1' size={24} color='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textColor: {
    color: 'white',
  },
});
