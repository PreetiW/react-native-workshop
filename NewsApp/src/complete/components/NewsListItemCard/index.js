import React, { Component } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';
import styles from './styles';

import Title from './../Title';
import Description from './../Description';

export default class NewsListItemCard extends Component {
  onCardPress = () => {
    const { navigation, data } = this.props;
    navigation.navigate('NewsArticleWeb', {
      title: data.title,
      url: data.url 
    })
  }
  render() {
    const  { data } = this.props
    return (
      <TouchableNativeFeedback onPress={this.onCardPress}>
        <View style={styles.card}>
          <Image style={styles.imageContainer}
          resizeMode="cover"
            source={{ uri: `${data.urlToImage}`}}/>
          <View style={styles.contentContainer}>
            <Title style={styles.titleStyle}>
              {data.title}
            </Title>
            <Description style={styles.descriptionStyle}>
              {data.description}
            </Description>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
