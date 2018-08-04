/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>News App</Text>
      </View>
    );
  }
}

