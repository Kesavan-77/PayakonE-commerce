import React,{createContext, useContext, useReducer, useEffect} from 'react';
import { useProductContext } from './ProductContext';
import reducer from '../reducer/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    filters:{
        text:"",
        category: "all",
    }
};

export const FilterContextProvider = ({children}) =>{
    
    const {products} = useProductContext();

    const [state,dispatch] = useReducer(reducer, initialState);


    const updateFilterValue = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        
        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
    };

    const clearFilters = ()=>{
        return dispatch({type:"CLEAR_FILTERS"})
    }

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"});
    },[products,state.filters])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload: products});
    },[products])

    return (
    <FilterContext.Provider value={{...state,updateFilterValue,clearFilters}}>{children}</FilterContext.Provider>
    );
}
export const useFilterContext = () =>{
    return useContext(FilterContext);
}