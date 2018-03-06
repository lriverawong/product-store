import React, { Component } from 'react';

/**
 * Stateless component or pure component
 * { product } syntax is the object deconstructing
 */
const Product = ({product}) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '30px 10px 10px 30px',
    }
    // if the props product is null, return Product doesn't exist
    if (!product) {
        return (
            <div style={divStyle}>
                <h2>Product Details</h2>
                <p>Product doesn't exist </p>
            </div>
        )
    }

    // else, display the product data
    return(
        <div style={divStyle}>
            <h2> Product Details </h2>
            <h3> {product.title} </h3>
            <p> {product.description} </p>
            <h3> Status {product.availability ? 'Available' : 'Out of stock'} </h3>
            <h3> Price: {product.price} </h3>
        </div>
    )
}

export default Product ;