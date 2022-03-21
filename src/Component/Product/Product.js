import React, { useState } from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props.products);
    const {image, category, price} = props.products;
    const [count, setCount]=useState(0);
    const cartCount=()=>{
        const newCount = count + 1;
        setCount(newCount);
    }
    console.log(count);
    // details
    // const detailsClick=()=>{
    //     // <!-- Vertically centered modal -->
    //     <div className="modal-dialog modal-dialog-centered">
    //         <div className="modal-dialog">
    //             <div className="modal-content">
    //             <div className="modal-header">
    //                 <h5 className="modal-title">Modal title</h5>
    //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div className="modal-body">
    //                 <p>Modal body text goes here.</p>
    //             </div>
    //             <div className="modal-footer">
    //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                 <button type="button" className="btn btn-primary">Save changes</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    // }
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
                    onClick={detailsClick}
                    */}
                </div>
            </div>
        </div>
    );
};

export default Product;