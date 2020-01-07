import React from 'react';
import Modal from 'react-modal';

// The only required prop for the modal object is isOpen, which indicates whether the modal should be displayed, and closeTimeoutMS 200 is millisecond to close modal, className modal is for styling
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button"  onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
