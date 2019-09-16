import React, { Component } from "react";
import Modal from "styled-react-modal";

export default class FancyModalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Click me</button>
        <Modal isOpen={this.state.isOpen}>
          <span>I am a modal!</span>
          <button onClick={this.toggleModal}>Close me</button>
        </Modal>
      </div>
    );
  }
}
