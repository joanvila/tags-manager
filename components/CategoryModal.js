import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Category extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={this.props.toggleModal} style={styles.leftHeader}>
            <Text style={styles.closeModalText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.centerHeader}>{this.props.name}</Text>
          <View style={styles.righHeader}></View>
        </View>
        <View style={styles.separator}></View>
        <Text style={styles.text}>Modal is open!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalHeader: {
    flexDirection: 'row',
  },
  closeModalText: {
    fontSize: 18,
    textAlign: 'center'
  },
  leftHeader: {
    flex: 0.1,
  },
  centerHeader: {
    textAlign: 'center',
    flex: 0.8,
    fontSize: 18,
  },
  rightHeader: {
    flex: 0.1,
  },
  separator: {
    borderWidth: 0.5,
    borderColor:'#eff0f1',
    marginTop: 15,
    marginBottom: 15,
  },
});

Category.propTypes = {
  name: PropTypes.string,
  toggleModal: PropTypes.func,
};
