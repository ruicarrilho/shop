import React from 'react';

const Button = ({ handleClick, text }) => (
  <button className='button-body' onClick={handleClick}>
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default Button;