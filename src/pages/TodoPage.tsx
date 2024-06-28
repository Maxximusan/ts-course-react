import React, {useState} from 'react';

import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo';
import { IItem } from '../types/todo'

export const TodoPage = () => {
    const [todos, setTodos] = useState<IItem[]>([])

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

    return(
        <div className='mt-14'>
        <AddTodo onAddTodo={ todoAddHandler} />
        <TodoList todos={todos} onRemoveTodo={ todoRemoveHandler} />
      </div>
    )
}