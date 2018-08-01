/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import styles from './styles';

import CategoryCard from './../../components/CategoryCard';

export default class NewsListScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    
  }

  renderContent() {
    const { articles } = this.state;
    if (!articles.length) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color="#FF595E" size="large" />
        </View>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

