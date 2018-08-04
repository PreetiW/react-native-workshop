import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 1,
    elevation: 1,
    //backgroundColor: '#fff',
    shadowColor: '#eaeaea',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    //height: 40,
    //borderColor: '#eaeaea',
    //borderWidth: 1,
    marginVertical: 10
  },
  imageContainer: {
    width: '100%',
    height: 150,
  
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleStyle: {
    fontSize: 18
  },
  descriptionStyle: {
    marginVertical: 10
  }
});

export default styles;