import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'immutable';
import * as actions from '../actions';
import ProductRow from '../components/ProductRow';


class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.props.loadProducts();
  }

  render() {
    const { products, addToCart, removeFromCart, quantityChanged } = this.props;
    const display = products.size > 0;

    return (
      <div className='items-list-body'>
        <div><h3>Items:</h3></div>
        <br />
        { display &&
          products.map(product =>
            <ProductRow
              key={ product.get('name') }
              addToCart={ addToCart }
              removeFromCart={ removeFromCart }
              quantityChanged={ quantityChanged }
              product={ product.toJS() } />
          )
        }
      </div>
    );
  }
}

ItemsList.propTypes = {
  products: React.PropTypes.instanceOf(List).isRequired,
  addToCart: React.PropTypes.func.isRequired,
  removeFromCart: React.PropTypes.func.isRequired,
  loadProducts: React.PropTypes.func.isRequired,
  quantityChanged: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  products: state.productsContext.get('products')
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);