import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

export default class TagManager extends React.Component {
  constructor() {
    super();
    this.state = { newCategory: '' };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header/>
        <ScrollView style={styles.scrollview}>
          <View style={styles.newCategoryContainer}>
            <TextInput
              underlineColorAndroid = "transparent"
              placeholder='New category'
              style={styles.categoryInput}
              onChangeText={(newCategory) => this.setState({newCategory})}
              value={this.state.newCategory}
            />
            <View style={styles.categoryButtonContainer}>
              <Button
                style={styles.categoryButton}
                color='#03A9F4'
                title="Add"
                onPress={() => this.props.addCategory(this.state.newCategory)} />
            </View>
          </View>
          <FlatList
            data={this.props.categories.categories}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  newCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryInput: {
    flex: 0.8,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    height: 40,
    padding: 5,
    borderColor: '#03A9F4',
    borderWidth: 1,
    borderRadius: 3,
  },
  categoryButtonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    padding: 5,
    height: 40,
  }
});
