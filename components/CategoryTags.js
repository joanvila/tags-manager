import React from 'react';
import PropTypes from 'prop-types';
import {
  Clipboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Tag from './Tag';
import RenderIfNotNullView from './RenderIfNotNullView';

export default class CategoryTags extends React.Component {
  constructor() {
    super();
    this.state = { copyButtonText: 'Copy all!' };
    this.copyTagsButtonHandler = this.copyTagsButtonHandler.bind(this);
  }

  copyTagsButtonHandler() {
    Clipboard.setString(`#${this.props.tags.join(' #')}`);
    this.setState({copyButtonText: 'Copied!'});
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
      <View>
        <View style={styles.tagsContainer}>
          {this.renderTags()}
        </View>

        <RenderIfNotNullView conditions={[this.props.tags]}>
          <View style={styles.separator}></View>

          <TouchableOpacity onPress={this.copyTagsButtonHandler} style={styles.copyTagsButton}>
            <Text style={styles.copyTagsText}>{this.state.copyButtonText}</Text>
          </TouchableOpacity>
        </RenderIfNotNullView>
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
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  separator: {
    borderWidth: 0.5,
    borderColor:'#eff0f1',
    marginTop: 15,
    marginBottom: 15,
  },
  copyTagsButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#00d775',
    borderWidth: 1,
    borderColor: '#00d775',
    borderRadius: 3,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  copyTagsText: {
    textAlign: 'center',
    color: 'white',
  },
});
