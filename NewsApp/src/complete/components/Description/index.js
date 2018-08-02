import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles';

class Description extends Component {
  render() {
    return (
      <Text style={[styles.description, this.props.style]} numberOfLines={this.props.numberOfLines}>
        {this.props.children}
      </Text>
    )
  }
}

export default Description;
