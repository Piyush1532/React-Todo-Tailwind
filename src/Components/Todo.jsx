import React, { useRef, useState } from 'react'
import todo_icon from "../assets/todo_icon.png"
import TodoItems from './TodoItems'
import uniqid from 'uniqid';

const Todo = () => {
 const inputRef=useRef();
 const [todoList,setTodoList]=useState([])

const addTodo=()=>{
const inputText=inputRef.current.value.trim()

if (inputText==='') {
  return null;
}else{
  const newTodo={
    id:uniqid(),
    text:inputText,
    isComplete:false
   }
   setTodoList((prev)=>[...prev,newTodo])
   inputRef.current.value=""
}


}




  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

<div className="flex items-center mt-7 gap-2">
    <img className='w-8' src={todo_icon} alt="" />
    <h1 className='text-3xl font-semibold'>Todo list</h1>
</div>
    

    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
      <input  className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"type="text" placeholder='Add your task' ref={inputRef} />
      <button className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer' onClick={addTodo}>Add +</button>
    </div>



<div>
  {todoList.map((item,index)=>{
return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete}/>
  })}

 
</div>
    </div>
  )
}

export default Todo
