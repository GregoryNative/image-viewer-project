/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './Navigation';

import configureStore from './store/configureStore';

import Colors from './constants/Colors';

// iPhone X safe area (top and bottom color)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.statusBar,
  },
});

export interface Props {}
export interface State {
  store: Object;
}
export default class Setup extends React.Component<Props, State> {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Provider store={configureStore()}>
          <Navigation />
        </Provider>
      </SafeAreaView>
    );
  }
}
