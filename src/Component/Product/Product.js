import React, { useState } from 'react';
import { cartDB, removeDB } from '../CartDB/CartDB';
import './Product.css';


const Product = (props) => {
    const { id, image, category, price } = props.products;
    const [count, setCount] = useState(0);
    const cartCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const cartBtn = (id) => {
        cartDB(id);
    }

    // removie items
    const removeCart = (id) => {
        removeDB(id);
        console.log(id);
    }

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
                        <button onClick={() => cartBtn(id)} className='btn btn-success'>Cart</button>
                    </div>
                    <div>
                        <button onClick={() => removeCart(id)} className='btn btn-danger cartBtnSpace'>Remove</button>
                    </div>
                    <div>
                        <button className='btn btn-info'>Details</button>
                    </div>

                    {/* 
                    onClick={this.cartBtn}
                    onClick={this.removeBtn}
                    onClick={this.infoBtn}
                    onClick={detailsClick}
                    */}
                </div>
            </div>
        </div>
    );
};

export default Product;