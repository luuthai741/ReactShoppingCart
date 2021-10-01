import React, { Component } from 'react';

class Product extends Component {

    showRating = (rating) => {
        let result = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                result.push(<i key={i} className="fa fa-star"></i>)
            } else {
                result.push(<i key={i} className="fa fa-star-o"></i>)
            }
        }
        return result;
    }

    addToCart = product => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage();
    }

    render() {
        let { product } = this.props;
        let { name, description, image, price, inventory, rating } = this.props.product;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={image}
                            className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(rating)}
                        </ul>
                        <p className="card-text">
                            {description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{price}$</span>
                            <span>{inventory}</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={() => this.addToCart(product)}>
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;