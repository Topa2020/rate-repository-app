import { Text, Pressable, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 80
  },
  text: {
    color: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  scrollView: {
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <Pressable>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/sign">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </Pressable>
    </ScrollView>
  </View>;
};

export default AppBar;