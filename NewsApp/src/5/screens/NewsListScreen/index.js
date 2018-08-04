/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';


import NewsListItemCard from './../../components/NewsListItemCard';
import articles from './../../utils/articles';


export default class NewsListScreen extends Component<Props> {

  renderNewsCards = ({ item }) =>
    <NewsListItemCard data={item} />

  _keyExtractor = (item, index) => item.url;


  render() {
    return (
      <View style={styles.container}>
        <FlatList data={articles}
          renderItem={this.renderNewsCards}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

