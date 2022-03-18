import React from 'react';
import './Product.css';

// row row-cols-1 row-cols-md-2
const Product = (props) => {
    console.log(props);
    return (
        <div>
            <div className="card align-items-center border-0 mb-3 shadow-sm ">
                <img className="card-header bg-transparent cartImage border-0" src={props.products.image} alt="" />
                <div className="card-body ">
                    <div className="card-text">
                        <h3>Category: {props.products.category}</h3>
                        <h2>Price: {props.products.price}$</h2>
                    </div>
                </div>
                <div className='card-footer d-flex flex-row justify-content-center bg-transparent border-0'>
                    <div>
                        <button className='btn btn-success'>Cart</button>
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