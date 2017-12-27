import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Category from './Category';
import Header from './Header';
import Footer from './Footer';
import NewCategoryContainer from '../containers/NewCategoryContainer';

export default class TagManager extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header/>
        <ScrollView style={styles.scrollview}>
          <NewCategoryContainer />
          <FlatList
            style={styles.categoryList}
            numColumns={2}
            data={this.props.categories.categories}
            renderItem={({item}) => <Category name={item.name} />}
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
  categoryList: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
