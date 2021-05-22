import React, { Fragment } from 'react';
import reactDom from 'react-dom';

import styles from './Modal.module.css';

function Backdrop(props) {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
