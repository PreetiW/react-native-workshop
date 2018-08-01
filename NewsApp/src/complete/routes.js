import { createStackNavigator } from 'react-navigation';

import CategoryListScreen from './screens/CategoryListScreen';
import NewsListScreen from './screens/NewsListScreen';

const routes = {
  Categories: {
    screen: CategoryListScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Categories',
    }),
  },
  NewsList: {
    screen: NewsListScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title')
    }),
  }
}

const stackNavigatorConfig = {
  initialRouteName: 'Categories',
  mode: 'card',
  headerMode: 'screen',
  //headerMode: 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FF595E',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '500',
    },
  },
}
const RootStack = createStackNavigator(routes, stackNavigatorConfig);

export default RootStack;