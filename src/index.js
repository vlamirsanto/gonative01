/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import 'config/ReactotronConfig';
import 'config/DevTools';
import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo GoNative',
        author: 'Vlamir Santo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ex justo. Proin aliquet tempus risus, sed faucibus lacus vulputate nec. In suscipit consectetur porttitor.',
      },
      {
        id: 2,
        title: 'Aprendendo GoNative',
        author: 'Vlamir Santo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ex justo. Proin aliquet tempus risus, sed faucibus lacus vulputate nec. In suscipit consectetur porttitor.',
      },
      {
        id: 3,
        title: 'Aprendendo GoNative',
        author: 'Vlamir Santo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ex justo. Proin aliquet tempus risus, sed faucibus lacus vulputate nec. In suscipit consectetur porttitor.',
      },
      {
        id: 4,
        title: 'Aprendendo GoNative',
        author: 'Vlamir Santo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ex justo. Proin aliquet tempus risus, sed faucibus lacus vulputate nec. In suscipit consectetur porttitor.',
      },
      {
        id: 5,
        title: 'Aprendendo GoNative',
        author: 'Vlamir Santo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ex justo. Proin aliquet tempus risus, sed faucibus lacus vulputate nec. In suscipit consectetur porttitor.',
      },
      {
        id: 6,
        title: 'Aprendendo GoNative',
        author: 'Vlamir Santo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ex justo. Proin aliquet tempus risus, sed faucibus lacus vulputate nec. In suscipit consectetur porttitor.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>GoNative App</Text>
        </View>
        <ScrollView style={styles.contentPost}>
          {this.state.posts.map(item => <Post key={item.id} data={item} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentPost: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
