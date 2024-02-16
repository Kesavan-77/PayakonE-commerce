import React from "react";
import Paths from './Route/Paths';
import './App.css';
import {AppProvider} from './context/ProductContext';
import {FilterContextProvider} from './context/FilterContext';
import { CartProvider } from "./context/CartContext";

const App = () => {
  return <>
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
      <Paths />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </>;
};

export default App;
