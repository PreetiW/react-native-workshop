import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles';

export default class Title extends Component {
  render() {
    return (
      <Text style={styles.title}>
        {this.props.text}
      </Text>
    )
  }
}

/*
export default class Title extends Component {
  render() {
    return (
      <Text>
        {this.props.children}
      </Text>
    )
  }
}
*/