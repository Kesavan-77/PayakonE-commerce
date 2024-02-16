const filterReducer = (state,action)=>{
    switch(action.type){

        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "UPDATE_FILTERS_VALUE":
            const {name,value} = action.payload;
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]: value,
                }
            }
        
        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterProducts = [...all_products];
            const {text, category} = state.filters;
            if(text){
                tempFilterProducts = tempFilterProducts.filter((currEle)=>{
                    return currEle.name.toLowerCase().trim().includes(text);
                })
            }
            if(category){
                if(category!=="All"){
                    tempFilterProducts = tempFilterProducts.filter((currEle)=>{
                        return currEle.category === category;
                    })
                }
            }
            return{
                ...state,
                filter_products: tempFilterProducts,
            }
            case "CLEAR_FILTERS":
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        text:"",
                    }
                }

        default: 
            return state;
    }
}

export default filterReducer;