import React, { Component } from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import CartItem from '../components/CartItem';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout'
import { updateItem, updateMess, deleteMess, deleteItem } from '../redux/actions/index'
class CartContainer extends Component {

    showTotal = cart => {
        let result = null;
        if (cart.length > 0) {
            result = <Checkout cart={cart} />
        }
        return result;
    }

    showItem = (cart) => {
        let result = null;
        let { updateItem, updateMess, deleteItem, deleteMess } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index}
                        item={item}
                        updateItem={updateItem}
                        updateMess={updateMess}
                        deleteItem={deleteItem}
                        deleteMess={deleteMess}
                    />
                )
            })
        }

        return result;
    }

    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showItem(cart)}
                {this.showTotal(cart)}
            </Cart>

        );
    }
}
PropTypes.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    updateItem: PropTypes.func.isRequired,
    updateMess: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    deleteMess: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateItem: (product, quantity) => {
            dispatch(updateItem(product, quantity))
        },
        updateMess: () => {
            dispatch(updateMess())
        },
        deleteItem: product => {
            dispatch(deleteItem(product))
        },
        deleteMess: () => {
            dispatch(deleteMess())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);