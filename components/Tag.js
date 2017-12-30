import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Tag extends React.Component {
  constructor() {
    super();
    this.onTagClickedHandler = this.onTagClickedHandler.bind(this);
  }

  onTagClickedHandler() {
    Alert.alert(
      'Delete tag',
      `#${this.props.tag}`,
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'Delete', onPress: () => this.props.deleteTag(this.props.tag)},
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.tagContainer}>
        <TouchableOpacity onPress={this.onTagClickedHandler}>
          <Text style={styles.tagName}>#{this.props.tag}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  deleteTag: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  tagContainer: {
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#03A9F4',
    borderWidth: 1,
    borderColor: '#03A9F4',
    borderRadius: 3,
  },
  tagName: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
  },
});
