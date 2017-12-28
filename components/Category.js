import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Category extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={this.props.openCategoryDetails}
          style={styles.categoryButton}>
          <Text style={styles.categoryName}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 0.5,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  categoryButton: {
    backgroundColor: '#03A9F4',
    borderColor: '#03A9F4',
    borderWidth: 1,
    borderRadius: 3,
  },
  categoryName: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

Category.propTypes = {
  name: PropTypes.string,
};
