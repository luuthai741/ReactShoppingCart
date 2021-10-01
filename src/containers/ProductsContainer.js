import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types'
import { addToCart, successMess } from '../redux/actions/index'

class ProductsContainer extends Component {
    showProduct = (products) => {
        let { onAddToCart, onChangMessage } = this.props;
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product key={index} product={product} onAddToCart={onAddToCart} onChangMessage={onChangMessage} />
                )
            })
        }

        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
}
PropTypes.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: product => {
            dispatch(addToCart(product, 1))
        },
        onChangMessage: () => {
            dispatch(successMess())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);