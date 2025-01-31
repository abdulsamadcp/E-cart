import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers:{
        // actionName : reducer function
        addToCart: (state,actionFromcomponent)=>{
            const existingProduct = state.find(item=>item.id==actionFromcomponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
                const remainingProducts = state.filter(item=>item.id !=existingProduct.id)
                state = [...remainingProducts,existingProduct]

            }else{
                state.push({...actionFromcomponent.payload,quantity:1,totalPrice:actionFromcomponent.payload.price})
            }
        },
        incrementQuantity:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
                const remainingProducts = state.filter(item=>item.id !=existingProduct.id)
                state = [...remainingProducts,existingProduct]

        },
        removeCartItem:(state,acttionByCart)=>{
            return state.filter(item=>item.id!=acttionByCart.payload)
        },
        decrementQuantity:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
                const remainingProducts = state.filter(item=>item.id !=existingProduct.id)
                state = [...remainingProducts,existingProduct]
        },
        emptyCart:(state)=>{
            return state=[]
        }
}
})

export const {addToCart,incrementQuantity,removeCartItem,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer