import { Component } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      // console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      // console.log('Кликнули в бэкдроп, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOnBackdropClick}>
        <div className="Modal">
          <img src={this.props.url} alt="" width="1000" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
