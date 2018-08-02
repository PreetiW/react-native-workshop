/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from './styles';

import CategoryCard from './../../components/CategoryCard';

import categories from './../../utils/categories';
/*
Pass data as a prop
*/

// const data = {
//   title: 'Finance',
//   description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
//   imageSource: require('../../../assets/categories/finance.jpg')
// }


export default class CategoryListScreen extends Component<Props> {
  renderCategoryCards = ({ item }) => 
    <CategoryCard navigation={this.props.navigation} data={item}/>
  _keyExtractor = (item, index) => item.id.toString();
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
          backgroundColor="#D6454A"
      />
        {/* <CategoryCard  /> */}
        <FlatList 
          data={categories}
          renderItem={this.renderCategoryCards}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
        {/* <CategoryCard data={data}/> */}
        </SafeAreaView>
    );
  }
}

