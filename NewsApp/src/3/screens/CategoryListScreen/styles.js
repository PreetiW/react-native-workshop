import { StyleSheet, Dimensions, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // For Platform specific styles
    paddingTop: Platform.OS === 'android' ? 30 : 20
  }
});

/** Another way of writing platform specific styles
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
 });
 */

export default styles;
