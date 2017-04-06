import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'immutable';
import * as actions from '../actions';
import CartRow from '../components/CartRow';
import TotalRow from '../components/TotalRow';
import classNames from 'classnames';

class Cart extends Component {

  render() {
    const { cart, removeCartRow } = this.props;
    const display = cart.size > 0;
    const cartClasses = classNames('cart-body', {
      'is-visible': display
    });
    const total = cart.reduce((sum, cartItem) => sum + cartItem.get('price'), 0);

    return (
      <div className={cartClasses}>
        <div><h3>Cart:</h3></div>
        <br />
        { display &&
          cart.map(cartItem =>
            <CartRow
              key={ cartItem.get('name') }
              handleClick={ cartItem => removeCartRow(cartItem) }
              cartItem={ cartItem.toJS() } />
          )
        }
        <hr />
        { display &&
          <TotalRow total={total} />
        }
      </div>
    );
  }
}

Cart.propTypes = {
  cart: React.PropTypes.instanceOf(List).isRequired,
  removeCartRow: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  cart: state.cartsContext.get('cart')
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);