/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import NewsListScreen from './screens/NewsListScreen';

import RootStack from './routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    // Convert the NewsListScreen into a list view
    return (
      <RootStack />
    );
  }
}
