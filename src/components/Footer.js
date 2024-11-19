import React from 'react'

const Footer = ({items,setItems}) => {
  return (
    <div className=' bg-black text-white font-semibold text-2xl p-5 pl-28 w-1/3 mx-96'>
        
        <p>No of items: {items.length}</p>
    </div>
  )
}

export default Footer