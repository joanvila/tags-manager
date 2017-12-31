import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const checkTruthy = (condition) => {
  if (Array.isArray(condition) && condition.length === 0) {
    return false;
  }
  return !!condition;
};

export default class RenderIfNotNullView extends React.Component {
  render() {
    return (
      this.props.conditions.every(checkTruthy) ?
        (this.props.children)
        :
        (<View />)
    );
  }
}

RenderIfNotNullView.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};
