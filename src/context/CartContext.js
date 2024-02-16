import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer';

const CartContext = createContext();

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("pkCart");
    if (!localCartData || localCartData === "null") return [];
    else return JSON.parse(localCartData);
}

const initialState = {
    cart: getLocalCartData(),
    total_items:"",
    total_amount:"",
    shipping_fee:0,
}



const CartProvider = ({children}) => {

    const[state,dispatch] = useReducer(reducer, initialState)

    const addToCart = (amount,product) => {
        dispatch({type:"ADD_TO_CART", payload:{amount,product}})
    }

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
      };

    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
      };

    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"},)
    };

    useEffect(()=>{
        dispatch({type:"CART_TOTAL"})
        localStorage.setItem("pkCart",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrement}}>{children}</CartContext.Provider>
};


const useCartContext = ()=>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext }