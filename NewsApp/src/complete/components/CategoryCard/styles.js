import { StyleSheet, Platform, Dimensions } from 'react-native';

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
    marginVertical: 10,

    /*
      Display Flex For inline layout
    */
   flexDirection: 'row'
  },
  /*
    Set a specific height width for images
  */
  imageContainer: {
    width: 100,
    height: 100
  },
  contentContainer: {
    flex: 1,
    padding: 10
  }
});

export default styles;