import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import actions from '@redux/book/actions';
import store from '@redux/store';

import styles from './styles.scss';

class Item extends PureComponent {
  addItem = () => {
    const { item } = this.props;
    store.dispatch(actions.addItem(item.id));
  };

  removeItem = () => {
    const { item } = this.props;
    store.dispatch(actions.removeItem(item.id));
  };

  render() {
    const { item, quantity } = this.props;
    return (
      <li className={styles.item}>
        <h3 className={styles.title}>{item.name}</h3>
        <span className={styles.contentButtons}>
          <span className={styles.quantity}>{quantity}</span>
          <Button className={styles.buttonCart} onClick={this.addItem}>
            <i className="fa fa-plus" />
          </Button>
          <Button className={styles.buttonCart} onClick={this.removeItem} isDanger>
            <i className="fa fa-trash" />
          </Button>
        </span>
      </li>
    );
  }
}

Item.propTypes = {
  item: bookSelectedPropType,
  quantity: number.isRequired
};

export default Item;
