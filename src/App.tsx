import React from 'react';

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  const todos = [{id: '1', title: 'text'}]
  return (
    <div className="App">
      <AddTodo />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
