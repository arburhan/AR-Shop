import React from 'react';

const Cart = ({ cartCount }) => {
    return (
        <div>
            <h1>total cart</h1>
            <h2>Total cart: {cartCount} </h2>
            <h3>Happy shopping</h3>
        </div>
    );
};

export default Cart;