/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

import Title from './../../components/Title';

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>News App</Text>
        <Title text="This is the Title" />
        <Image style={styles.image} source={require('../../../assets/background.jpg')}/>
        {/*<Image style={styles.image}
               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>*/}
      </View>
    );
  }
}

