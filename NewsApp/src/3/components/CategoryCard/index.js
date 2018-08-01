import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

import Title from './../Title';
import Description from './../Description';

export default class CategoryCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image 
          resizeMode="cover"
          source={require('../../../assets/categories/finance.jpg')}
        style={styles.imageContainer}/>
        <View style={styles.contentContainer}>
          <Title>Finance</Title>
          <Description numberOfLines={3}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled
          </Description>
        </View>
      </View>
    )
  }
}
