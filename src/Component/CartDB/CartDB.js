const cartDB=(id)=>{
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    // const quantityID = localStorage.getItem(id);
    if(quantity){
        const newQuantity = shoppingCart[id] + 1;
        shoppingCart[id]=newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
export {cartDB};