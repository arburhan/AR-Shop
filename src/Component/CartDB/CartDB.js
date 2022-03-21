const cartDB=(id)=>{
    const quantityID = localStorage.getItem(id);
    if(quantityID){
        const newQuantity = parseInt(quantityID) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
        localStorage.setItem(id, 1);
    }
}
export {cartDB};