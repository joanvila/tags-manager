import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';
import TagManagerContainer from './containers/TagManagerContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TagManagerContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
