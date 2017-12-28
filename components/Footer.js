import React from 'react';
import nodeEmoji from 'node-emoji';
import {
  Button,
  Linking,
  StyleSheet,
  View,
} from 'react-native';

export default class Header extends React.Component {
  constructor() {
    super();
    this.heart = nodeEmoji.get('heart');
    this.instagramUrl = 'https://www.instagram.com/vila_joan/';
    this.visitInstagram = this.visitInstagram.bind(this);
  }

  visitInstagram() {
    Linking.openURL(this.instagramUrl)
      .catch(err => console.error('An error occurred opening Instagram', err));
  }

  render() {
    const buttonTitle = `Built with ${this.heart} by @vila_joan`

    return (
      <View style={styles.bar}>
        <Button
          title={buttonTitle}
          style={styles.title}
          color='white'
          onPress={this.visitInstagram} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    paddingBottom: 5,
    maxHeight: 60,
    backgroundColor: '#03A9F4',
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 18,
  },
});
