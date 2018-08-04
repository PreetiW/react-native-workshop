import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles';


class Title extends Component {
  render() {
    return (
      <Text style={styles.title}>
        {this.props.children}
      </Text>
    )
  }
}

export default Title;