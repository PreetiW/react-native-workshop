import { createStackNavigator } from 'react-navigation';

import CategoryListScreen from './screens/CategoryListScreen';
import NewsListScreen from './screens/NewsListScreen';
// import NewsArticleWebScreen from './screens/NewsArticleWebScreen';

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
  },
}

const stackNavigatorConfig = {
  /* Add Navigation Config Here*/
}
const RootStack = createStackNavigator(routes, stackNavigatorConfig);

export default RootStack;