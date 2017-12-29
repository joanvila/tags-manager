import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CategoryModal from './CategoryModal';

export default class Category extends React.Component {
  constructor() {
    super();
    this.state = { modalVisible: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
 }

  render() {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={this.toggleModal}
          style={styles.categoryButton}>
          <Text style={styles.categoryName}>{this.props.name}</Text>
        </TouchableOpacity>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}>
          <CategoryModal
            name={this.props.name}
            toggleModal={this.toggleModal}
            categoryKey={this.props.categoryKey}/>
        </Modal>

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
  categoryKey: PropTypes.string,
};
