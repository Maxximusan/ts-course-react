import React from 'react';

import { IItem } from '../types/todo'

interface IProps {
    todos: IItem[];
    onRemoveTodo: (id: string) => void
}

// interface IState {
//     count: number
// }

const TodoList: React.FC<IProps> = (props) => {
    console.log(props);
    
    return (
        <ul className='px-5'>
            {props.todos.map((item) => {
                return (
                    <li key={item.id} className='mb-4'>
                        <div>{ item.id}</div>
                        <div>{item.title}</div>
                        <button className='bg-red-200 rounded-md' onClick={props.onRemoveTodo.bind(this, item.id)}>Remove</button>
                    </li>
                )
            })}
         </ul>
     )
}


export default TodoList