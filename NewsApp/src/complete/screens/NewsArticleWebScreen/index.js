/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, WebView, ActivityIndicator } from 'react-native';
import styles from './styles';

import Title from './../../components/Title';

export default class NewsArticleWebScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }
  renderActivityIndicator() {
    return(
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color="#FF595E" size="large" />
      </View>
    )
  }
  render() {
    const uri = this.navigation.getParam('url');
    return (
      <View style={styles.container}>
        <WebView source={{ uri }} renderLoading={this.renderActivityIndicator} 
          startInLoadingState={true}/>
      </View>
    );
  }
}

