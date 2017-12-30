import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryTags from '../components/CategoryTags';

const CategoryTagsContainer = props => (
  <CategoryTags categoryKey={props.categoryKey} tags={props.tags} />
);

CategoryTagsContainer.propTypes = {
  categoryKey: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  for (let i in state.categories.categories) {
    if (state.categories.categories[i].key === ownProps.categoryKey) {
      return { tags: state.categories.categories[i].tags };
    }
  }
  return { tags: [] };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTagsContainer)
