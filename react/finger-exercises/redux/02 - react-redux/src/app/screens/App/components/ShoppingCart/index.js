import React, { Fragment, Component } from 'react';
import Button from '@components/Button';
import store from '@redux/store';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends Component {
  state = {
    open: false,
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { bookSelected } = store.getState();
      this.setState({ bookSelected });
    });
  }

  toggleContent = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => <Item key={item.id} item={item} quantity={item.quantity} />;

  render() {
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{this.state.bookSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>
            Total: {this.state.bookSelected.reduce(this.total, 0)}
          </h2>
        </div>
      </Fragment>
    );
  }
}

export default ShoppingCart;
