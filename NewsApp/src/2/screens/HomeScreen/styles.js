import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    color:'#333',
    margin: 20,
  },
  image: {
    width: 200,
    height: 100,
    margin: 8,
    //resizeMode:'contain'
  }
});

export default styles;
