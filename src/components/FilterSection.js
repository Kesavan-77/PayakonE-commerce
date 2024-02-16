import React from 'react'
import { useFilterContext } from '../context/FilterContext';


export default function FilterSection() {
    const {
        filters: {text},
        all_products,
        updateFilterValue,
        clearFilters,
    } = useFilterContext();

    const getUniqueData = (data,prop)=>{
      let newVal = data.map((currEle)=>{
        return currEle[prop]
      })
      newVal = ["All",...new Set(newVal)]
      return newVal;
    };

    const categoryOnlyData = getUniqueData(all_products,"category")

  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
              <input type='text' name='text' placeholder='Search your product' value={text} id='input' onChange={updateFilterValue}/>
              <input type='submit' name='submit' value='Clear' id='submit' onClick={clearFilters}/>
        </form>
        <div className='category-filter'>
          {categoryOnlyData.map((currEle,index)=>{
            return <button key={index} type="button" name="category" value={currEle} onClick={updateFilterValue}>{currEle}</button>
          })}
        </div>
        <div className="filter-clear">
        </div>
    </div>
  )
}
