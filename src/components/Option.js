import React from 'react';

// Button for remove Single option with handleDeleteOption method
const Option = (props) => (
  <div className="option"> 
  <p className="option__text">{props.count}. {props.optionText}</p>
    <button
    className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
