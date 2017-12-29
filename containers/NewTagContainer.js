import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewTag from '../components/NewTag';


const NewTagContainer = props => (
  <NewTag categoryKey={props.categoryKey} addTag={props.addTag}/>
);

NewTagContainer.propTypes = {
  categoryKey: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  addTag: (tag, categoryKey) => {
    dispatch({type: 'ADD_TAG_TO_CATEGORY', tag: tag, categoryKey: categoryKey})
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTagContainer)
