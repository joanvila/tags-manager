import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryModal from '../components/CategoryModal';

const CategoryModalContainer = props => (
  <CategoryModal
    name={props.name}
    categoryKey={props.categoryKey}
    toggleModal={props.toggleModal}
    deleteCategory={props.deleteCategory} />
);

CategoryModalContainer.propTypes = {
  name: PropTypes.string.isRequired,
  categoryKey: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteCategory: () => {
    dispatch({
      type: 'DELETE_CATEGORY',
      categoryKey: ownProps.categoryKey,
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModalContainer)
