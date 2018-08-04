/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';


import NewsListItemCard from './../../components/NewsListItemCard';
import articles from './../../utils/articles';
//import Api from './../../utils/api'; 


export default class NewsListScreen extends Component<Props> {

  componentDidMount() {
    /*
      Make APi Call here
    */
  }

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

