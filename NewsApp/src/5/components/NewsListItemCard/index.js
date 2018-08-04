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
          source={{uri: data.urlToImage}}/>
        <View style={styles.contentContainer}>
          <Title style={styles.titleStyle}>
            {data.title}
          </Title>
          <Description style={styles.descriptionStyle}>
            {data.description}
          </Description>
        </View>
      </View>
    )
  }
}
