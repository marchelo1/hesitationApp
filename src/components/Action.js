import React from 'react';


const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions} // If there is no Options make disabled button
    >
      What should I do?
    </button>
  </div>
);


export default Action;
