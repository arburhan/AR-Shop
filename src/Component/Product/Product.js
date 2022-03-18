import React, { useState } from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props);
    const [count, setCount]=useState(0);
    const cartCount=()=>{
        const newCount = count + 1;
        setCount(newCount);
    }
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
                        <button onClick={cartCount} className='btn btn-success'>Cart</button>
                    </div>
                    <div>
                        <button  className='btn btn-danger cartBtnSpace'>Remove</button>
                    </div>
                    <div>
                        <button  className='btn btn-info'>Details</button>
                    </div>
                    {/* 
                    onClick={this.cartBtn}
                    onClick={this.removeBtn}
                    onClick={this.infoBtn}
                    */}
                </div>
            </div>
        </div>
    );
};

export default Product;