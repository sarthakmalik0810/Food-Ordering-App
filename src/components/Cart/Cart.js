import React from 'react';

import Modal from '../UI/Modal';
import styles from './Cart.module.css';

function Cart(props) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total AMOUNT</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>CLOSE</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
