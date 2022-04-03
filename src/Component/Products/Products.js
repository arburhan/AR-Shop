import React, { createContext, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    let [cartCount, setCartCount] = useState([]);
    const addToCart = (id) => {
        const newCart = [...cartCount, id];
        setCartCount(newCart);
    }
    console.log(cartCount);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div style={{ padding: 20 }} className='container-fluid row row-clos-1 row-cols-md-3'>
                {
                    products.map(product => <Product products={product} addToCart={addToCart} key={product.id} ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;