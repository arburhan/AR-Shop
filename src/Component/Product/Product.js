import React, { useState } from 'react';
import './Product.css';


const Product = (props) => {
    const { id, image, category, price } = props.products;
    const addToCart = props.addToCart;
    return (
        <div>
            <div className="card align-items-center border-0 mb-3 shadow-sm ">
                <img className="card-header bg-transparent cartImage border-0" src={image} alt="" />
                <div className="card-body ">
                    <div className="card-text">
                        <h3>Category: {category}</h3>
                        <h2>Price: {price}$</h2>
                    </div>
                </div>
                <div className='card-footer d-flex flex-row justify-content-center bg-transparent border-0'>
                    <div>
                        <button onClick={() => { addToCart(id) }} className='btn btn-success'>Cart</button>
                    </div>
                    <div>
                        <button className='btn btn-danger cartBtnSpace'>Remove</button>
                    </div>
                    <div>
                        <button className='btn btn-info'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;