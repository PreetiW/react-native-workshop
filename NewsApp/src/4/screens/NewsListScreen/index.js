/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';


import NewsListItemCard from './../../components/NewsListItemCard';

export default class NewsListScreen extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <NewsListItemCard />
        {/* Use FlatList and convert this screen into */}
      </View>
    );
  }
}

