/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, FlatList, StatusBar } from 'react-native';
import styles from './styles';

import CategoryCard from './../../components/CategoryCard';

import categories from './../../utils/categories';


export default class CategoryListScreen extends Component<Props> {
  renderCategoryCards = ({ item }) => 
    <CategoryCard navigation={this.props.navigation} data={item}/>

  _keyExtractor = (item, index) => item.id.toString();
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={categories}
          renderItem={this.renderCategoryCards}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

