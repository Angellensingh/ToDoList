import React from 'react'
import { FaPlus } from "react-icons/fa";

const Search = ({handleAdditem,add,handleSubmit}) => {
    
  return (
    <div className='p-2 pl-8 inline-flex '>
            <input 
                type='text'
                placeholder='Add Item'
                className='pl-2 rounded'
                value={add}
                onChange={(e)=>handleAdditem(e)}
            />
            <div className=''> 
                <button className='' type='submit' onClick={handleSubmit}><FaPlus className='ml-2 h-10 bg-slate-400 w-12 p-1 mt-1 border-black border-solid border-2 rounded hover:bg-slate-500'/></button>
            </div>
    </div>
  )
}

export default Search