// cartReducer.js

export default function CartReducer(state, action) {
  if (!state) {
    // Initial state with a 'cart' property
    state = {
      cart: [],
      // Other properties in your state...
    };
  }
  if (action.type === "ADD_TO_CART") {
    const { amount, product } = action.payload;

    // Check if the product is already in the cart
    const existingProduct = state.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      const updatedCart = state.cart.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + amount > existingProduct.stock? existingProduct.stock :  item.amount + amount } : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      // If the product is not in the cart, add it
      const cartProduct = {
        id: product.id,
        name: product.name,
        company: product.company,
        price: product.price,
        image: product.image,
        amount,
        stock: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }


  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.stock) {
          incAmount = curElem.stock;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedCart = state.cart.filter((currEle) => currEle.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if(action.type === "CART_TOTAL"){
    let total_amount = state.cart.reduce((acc, currEle)=>{
      let {price,amount} = currEle;
      acc = acc + price * amount;
      return acc;
    },0);
    return {
      ...state,
      total_amount,
    }
  }

  if(action.type === "CLEAR_CART"){
    return{
      ...state,
      cart:[],
    }
  }

  return state;
}
