/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
//import HomeScreen from './screens/HomeScreen';
import CategoryListScreen from './screens/CategoryListScreen';
//import NewsListScreen from './screens/NewsListScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    // Replace The CategoryListScreen With NewsListScreen
    return (
      <CategoryListScreen />
    );
  }
}
