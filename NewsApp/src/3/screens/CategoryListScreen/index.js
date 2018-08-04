/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

import CategoryCard from './../../components/CategoryCard';

/*
Pass data as a prop
*/

// const data = {
//   title: 'Finance',
//   description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
//   imageSource: require('../../../assets/categories/finance.jpg')
// }


export default class CategoryListScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CategoryCard  />
        {/* <CategoryCard data={data}/> */}
      </View>
    );
  }
}

