import { StyleSheet, Text, View, Image} from 'react-native';
import Main from './src/componentes/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop:80
  },
});