import React from 'react'
import { FaTrash } from "react-icons/fa";
import Search from './Search';

const Content = ({items,add,handleClick,handleDelete,handleAdditem,handleSubmit}) => {
    
  return (

    <div className='w-1/3 mx-96 bg-orange-200 h-content border-black border-solid border-2'>
        <Search handleAdditem={handleAdditem} add={add} handleSubmit={handleSubmit}/>
        {(items.length)?(
            <ul>
                {items.map((item)=>(
                <li className='flex p-3 justify-between' key={item.id}>
                    <input type="checkbox" checked={item.checked} className=' w-20 h-10' onChange={()=>handleClick(item.id)}/>
                    <p className={`pt-2 font-semibold text-xl ${item.checked === true? 'line-through ':''}`} onDoubleClick={()=>handleClick(item.id)}>{item.item}</p>
                    <FaTrash className='w-20 mt-3 h-6 justify-end' role="button" onClick={()=>handleDelete(item.id)}/>
                
                </li>

                ))}
            </ul>
        ):(<p className='font-semibold text-xl p-36'>List is Empty</p>)
        }
       
    </div>
  )
}

export default Content