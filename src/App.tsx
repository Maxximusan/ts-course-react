import React, {useState} from 'react';

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';
import { IItem } from './types/todo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([])

  function todoAddHandler(todo: IItem) {
    setTodos((prevTodos) => {
      return [
  ...prevTodos,{id: Math.random().toString(), title: todo.title}
             ]
    })
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={ todoAddHandler} />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
