import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class NewTag extends React.Component {
  constructor() {
    super();
    this.state = { newTag: '' };
    this.addTagHandler = this.addTagHandler.bind(this);
  }

  addTagHandler() {
    if (this.state.newTag !== '') {
      console.log('cat id', this.props.categoryKey);
      this.props.addTag(this.state.newTag, this.props.categoryKey);
      this.setState({ newTag: '' });
    }
  }

  render() {
    return (
      <View style={styles.newCategoryContainer}>
        <TextInput
          underlineColorAndroid = "transparent"
          placeholder='New tag'
          style={styles.categoryInput}
          onChangeText={(newTag) => this.setState({newTag})}
          value={this.state.newTag}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={styles.categoryButtonContainer}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={this.addTagHandler}>
            <Text style={styles.categoryButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoryInput: {
    flex: 0.8,
    marginTop: 15,
    height: 40,
    padding: 5,
    borderColor: '#03A9F4',
    borderWidth: 1,
    borderRadius: 3,
  },
  categoryButtonContainer: {
    flex: 0.2,
    marginTop: 15,
    marginLeft: 15,
  },
  categoryButton: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#03A9F4',
    borderColor: '#03A9F4',
    borderWidth: 1,
    borderRadius: 3,
  },
  categoryButtonText: {
    flex: 1,
    paddingTop: 5,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

NewTag.propTypes = {
  categoryKey: PropTypes.string,
  addTag: PropTypes.func.isRequired,
};
