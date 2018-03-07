import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.data.title}</Text>
    <Text style={styles.author}>{props.data.author}</Text>
    <View style={styles.post}>
      <Text style={styles.text}>{props.data.text}</Text>
    </View>
  </View>
);

Post.PropTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired(),
};

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
  },
});

export default Post;
