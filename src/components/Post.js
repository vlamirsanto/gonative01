import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Post extends Component
{
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.title}>{this.props.data.title}</Text>
      <Text style={styles.author}>{this.props.data.author}</Text>
      <View style={styles.post}>
        <Text style={styles.text}>{this.props.data.text}</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 20,
    borderColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold'
  },
  author: {
    color: '#999999',
    fontSize: 14,
  },
  post: {
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    marginTop: 10,
    paddingVertical: 10,
  },
  text: {
    color: '#666666',
    fontSize: 14,
  }
});
