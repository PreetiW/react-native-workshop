import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

import Title from './../Title';
import Description from './../Description';

export default class NewsListItemCard extends Component {
  render() {
    const  { data } = this.props
    return (
      <View style={styles.card}>
        <Image style={styles.imageContainer}
        resizeMode="cover"
          source={require('../../../assets/categories/finance.jpg')}/>
        <View style={styles.contentContainer}>
          <Title style={styles.titleStyle}>
            Finance
          </Title>
          <Description style={styles.descriptionStyle}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled
          </Description>
        </View>
      </View>
    )
  }
}
