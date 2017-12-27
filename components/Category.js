import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Category extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 0.5,
    maxWidth: '50%',
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#03A9F4',
  },
  name: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

Category.propTypes = {
  name: PropTypes.string,
};
