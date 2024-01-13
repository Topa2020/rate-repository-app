import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8'
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;