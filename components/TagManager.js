import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

export default class TagManager extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header/>
        <ScrollView style={styles.scrollview}>
          <Button
            title="Add"
            onPress={() => this.props.add('#joan')} />
          <Text>{this.props.tags.tags}</Text>
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
    flexDirection: 'row',
  },
});
