import { createContext, useContext, useReducer, useEffect } from "react";
import ProductItems from './products.json';
import reducer from '../reducer/ProductReducer';

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getProducts = async (ProductItems) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const products = ProductItems;
            dispatch({ type: "SET_JSON_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "JSON_ERROR" });
        }
    };
    const getSingleProduct = (ProductItems)=>{
        dispatch({ type: "SET_SINGLE_LOADING" });
        try{
            const singleProduct = ProductItems;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        }catch(error){
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }
    
    useEffect(()=>{
        getProducts(ProductItems)
    },[]);

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>;
};


const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
