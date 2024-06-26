import React, {useState} from 'react';

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';

import { Product } from './components/Product'
import {products} from './data/products'
import { IItem } from './types/todo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([])
  const [count, setCount] = useState(0)

  function todoAddHandler(todo: IItem) {
    setTodos((prevTodos) => {
      return [
  ...prevTodos,{id: Math.random().toString(), title: todo.title}
             ]
    })
  }


  function todoRemoveHandler(id: string): void {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== id
      })
    
    })
    
  }


  const Increase = () => {
   
    setCount(count +1)
    console.log(count);
    
  }

  const Decrease = () => {
    
    setCount(prev => prev -= 1)
    console.log(count);
    
  }
  
  return (
    <div className="App">
      <div className='border border-purple-700'>
      <h1> Start practicing </h1>
      <button className='m-4 p-4 border border-green-900' onClick={Increase}> Increase!</button>
      <button className='m-4 p-4 border border-red-700' onClick={Decrease}> Decrease!</button>
      </div>
      <Product prod={products[0]}/>
      <Product prod={products[1]}/>

      <div className='mt-14'>
      <AddTodo onAddTodo={ todoAddHandler} />
      <TodoList todos={todos} onRemoveTodo={ todoRemoveHandler} />
      </div>
    </div>
  );
  // return React.createElement('h2', {className:'wow'}, 'HELLO')


}


export default App;
