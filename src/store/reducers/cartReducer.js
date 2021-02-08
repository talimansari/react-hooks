const initState = {
  products:[],
  totalPrice:0,
  totalQuantities:0
}

const cartReducer = (state =initState, action ) =>{
    switch(action.type){
        case 'ADD_TO_CART' :
            const {product,quantity} = action.payload;
            const check = state.products.find(product =>   product.id === product.id);
            if(check){
               return state;
           }else{
                const Tprice = state.totalPrice + product.discountprice * quantity;
                const Tquantities = state.totalQuantities + quantity;
                product.quantity = quantity;
                return{
                   ...state,  products: [...state.products,product], totalPrice:Tprice,
                    totalQuantities:Tquantities
                }
           }
         default:
             return state;
    }
}
export default cartReducer;