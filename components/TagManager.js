import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
});
