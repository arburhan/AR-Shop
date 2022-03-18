import React from 'react';

const Product = (props) => {
    console.log(props);
    return (
        <div>
            <img style={{width: 200}} src={props.products.image} alt="" />
            <h2>{props.products.title}</h2>
        </div>
    );
};

export default Product;