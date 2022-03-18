import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div style={{padding: 20}} className='container-fluid row row-clos-1 row-cols-md-3'>
           {
               products.map(product=><Product products={product} key={product.id} ></Product>) 
           }
            
        </div>
    );
};

export default Products;