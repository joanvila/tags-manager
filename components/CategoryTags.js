import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CategoryTags extends React.Component {
  constructor() {
    super();
  }

  renderTags() {
    return this.props.tags.map(function(tag) {
      return (
        <Text key={tag}>#{tag} </Text>
      );
    });
  }

  render() {
    return (
      <View style={styles.tagsContainer}>
        {this.renderTags()}
      </View>
    );
  }
}

CategoryTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
