/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, ToastAndroid } from 'react-native';
import styles from './styles';

import Api from './../../utils/api';

import NewsListItemCard from './../../components/NewsListItemCard';
import { BASE_URL } from '../../utils/constants';

export default class NewsListScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const category = navigation.getParam('category');
    
    Api.get(BASE_URL)
      .then(response => {
        this.setState({
          articles: response.articles
        })
      })
      .catch(e => {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      });
  }


  renderNewsCards = ({ item }) =>
    <NewsListItemCard navigation={this.props.navigation} data={item} />

  _keyExtractor = (item, index) => item.url;

  renderContent() {
    const { articles } = this.state;

    if (!articles.length) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color="#FF595E" size="large" />
        </View>
      )
    }

    return (
      <FlatList data={articles}
        renderItem={this.renderNewsCards}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

