import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

import Tag from './Tag';

export default class CategoryTags extends React.Component {
  constructor() {
    super();
  }

  renderTags() {
    return this.props.tags.map(tag => {
      return (
        <Tag key={tag} tag={tag} deleteTag={this.props.deleteTag} />
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
  deleteTag: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
