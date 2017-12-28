import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class NewCategory extends React.Component {
  constructor() {
    super();
    this.state = { newCategory: '' };
    this.addCategoryHandler = this.addCategoryHandler.bind(this);
  }

  addCategoryHandler() {
    if (this.state.newCategory !== '') {
      this.props.addCategory(this.state.newCategory);
      this.setState({ newCategory: '' });
    }
  }

  render() {
    return (
      <View style={styles.newCategoryContainer}>
        <TextInput
          underlineColorAndroid = "transparent"
          placeholder='New category'
          style={styles.categoryInput}
          onChangeText={(newCategory) => this.setState({newCategory})}
          value={this.state.newCategory}
        />
        <View style={styles.categoryButtonContainer}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={this.addCategoryHandler}>
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
    marginLeft: 15,
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
    marginRight: 15,
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
