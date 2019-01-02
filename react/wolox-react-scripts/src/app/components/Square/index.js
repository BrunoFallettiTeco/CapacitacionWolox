import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

export default function Square(props) {
    return (
      <button 
        className="square"
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
