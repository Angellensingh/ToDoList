
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [add,setAdd] = useState('')

  const [items,setItems] = useState(JSON.parse(localStorage.getItem('to-do-list'))
  //  [{
  //     id:1,
  //     checked:true,
  //     item: 'Practice Coding'
  //   },
  //   {
  //     id:2,
  //     checked:true,
  //     item: 'Washing'
  //   },
  //   {
  //     id:3,
  //     checked:true,
  //     item:'Eating'
  //   }]
  )

  const handleClick=(id)=>{
    const newItems = items.map((item)=>
        item.id ===id?{...item,checked:!item.checked}:item)
        setItems(newItems)  
        localStorage.setItem('to-do-list',JSON.stringify(newItems))
  }
  const handleDelete=(id)=>{
    const newItems = items.filter((item)=>item.id !== id)
    setItems(newItems)
    localStorage.setItem('to-do-list',JSON.stringify(newItems))

  }
  const addItem=(item) =>{
    const addNewItem={id:items.length+1,checked:false,item}
    const  newItems=[...items,addNewItem]
    setItems(newItems)
    localStorage.setItem('to-do-list',JSON.stringify(newItems))
  }
  const handleAdditem=(e)=>{
    setAdd(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!add) return
    addItem(add)
    setAdd('')
  }
  
  return (
    <div className=''>
      <Header/>
      <Content items={items} add={add} handleClick={handleClick} handleDelete={handleDelete} handleAdditem={handleAdditem} handleSubmit={handleSubmit}/>
      <Footer items={items} setItems={setItems} />
    </div>
  );
}

export default App;
