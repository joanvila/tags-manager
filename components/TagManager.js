import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
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
        <ScrollView style={styles.scrollView}>
          <NewCategoryContainer />
          <View style={styles.separator}></View>
          <FlatList
            style={styles.categoryList}
            numColumns={1}
            data={this.props.categories.categories}
            renderItem={({item}) =>
              <Category name={item.name} categoryKey={item.key} />}
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
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  separator: {
    borderWidth: 0.5,
    borderColor:'#eff0f1',
    margin: 15,
  },
  categoryList: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
