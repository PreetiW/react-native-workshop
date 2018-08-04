import React, { Component } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';
import styles from './styles';

import Title from './../Title';
import Description from './../Description';

export default class CategoryCard extends Component {
  onPressHandler() {
    alert('clicked')
  }
  render() {
    const { data } = this.props;
    return (
      <TouchableNativeFeedback onPress={this.onPressHandler}>
        <View style={styles.card}>
          <Image 
            resizeMode="cover"
            source={data.imageSource}
          style={styles.imageContainer}/>
          <View style={styles.contentContainer}>
            <Title>{data.title}</Title>
            <Description numberOfLines={3}>
              {data.description}
            </Description>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
