import { Text, Pressable, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 100
  },
  text: {
    color: 'white',
    paddingTop: 30,
    paddingLeft: 10,
    fontWeight: 'bold'
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text style={styles.text}>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;