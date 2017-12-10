import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.title}>Tags Manager</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    maxHeight: 80,
    paddingTop: 35,
    backgroundColor: '#03A9F4',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
