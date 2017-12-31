import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import NewTagContainer from '../containers/NewTagContainer';
import CategoryTagsContainer from '../containers/CategoryTagsContainer';

export default class CategoryModal extends React.Component {
  constructor() {
    super();
    this.editCategoryButtonHandler = this.editCategoryButtonHandler.bind(this);
  }

  editCategoryButtonHandler() {
    Alert.alert(
      `Edit ${this.props.name}`,
      'Only delete is possible right now',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'Delete', onPress: () => this.props.deleteCategory(), style: 'destructive'},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={this.props.toggleModal} style={styles.leftHeader}>
            <Text style={styles.closeModalText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.centerHeader}>{this.props.name}</Text>
          <TouchableOpacity onPress={this.editCategoryButtonHandler} style={styles.rightHeader}>
            <Text style={styles.editCategoryText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <Text style={styles.sectionTitle}>Tags</Text>
        <NewTagContainer categoryKey={this.props.categoryKey}/>
        <CategoryTagsContainer categoryKey={this.props.categoryKey}/>
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
    color: '#524c61',
    fontWeight: 'bold',
  },
  leftHeader: {
    flex: 0.2,
  },
  centerHeader: {
    textAlign: 'center',
    flex: 0.6,
    fontSize: 18,
    color: '#524c61',
    fontWeight: 'bold',
  },
  rightHeader: {
    flex: 0.2,
  },
  editCategoryText: {
    textAlign: 'right',
    fontSize: 18,
    color: '#9a95a7',
  },
  separator: {
    borderWidth: 0.5,
    borderColor:'#eff0f1',
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#524c61',
  }
});

CategoryModal.propTypes = {
  name: PropTypes.string.isRequired,
  categoryKey: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};
