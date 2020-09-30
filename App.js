/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ReduxApp from './src/ReduxApp';
import store from './src/store';
import { Provider } from 'react-redux';



export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    );
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
