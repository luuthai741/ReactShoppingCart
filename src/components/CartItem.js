import React, { Component } from 'react';

class CartItem extends Component {
    showTotal = (price, quantity) => {
        return price * quantity;
    }
    onPlusItem = item => {
        if (item > 0) {
            this.props.updateItem(item, 1)
        }
        this.props.updateMess();
    }

    onMinusItem = item => {
        if (item > 1) {
            this.props.updateItem(item, -1)
        }
        this.props.updateMess();
    }
    onDeleteItem = item => {
        this.props.deleteItem(item);
        this.props.deleteMess();
    }

    render() {
        let { item } = this.props;
        let { product, quantity } = this.props.item;
        // console.log(product, quantity);
        let { name, price, image } = product
        // console.log(name, price, image);
        return (
            <tr>
                <th scope="row">
                    <img src={image}
                        alt="" class="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{name}</strong>
                    </h5>
                </td>
                <td>{price}$</td>
                <td class="center-on-small-only">
                    <span class="qty">{quantity} </span>
                    <div class="btn-group radio-group" data-toggle="buttons">
                        <label class="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light" onClick={() => this.onMinusItem(item)}>

                            <a>—</a>
                        </label>
                        <label class="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light" onClick={() => this.onPlusItem(item)}>

                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(price, quantity)}$</td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={() => this.onDeleteItem(item)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;