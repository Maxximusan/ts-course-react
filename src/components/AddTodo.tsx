import React, {useState} from 'react';

import { IItem } from '../types/todo'

interface IProps{
    onAddTodo: (todo: IItem) => void
}

type OnlyTitle = Pick<IItem, 'title'>

const AddTodo: React.FC<IProps> = (props) => {
    const [todo, titleTodo] = useState<Partial<OnlyTitle>>({})

    function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
               
        titleTodo({
            title: e.target.value,
        });
}


    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        if (!todo.title) {
           return
        }
        props.onAddTodo(todo as IItem)
        // console.log(todo.title);
        
}

    return (
    <form className='px-5 mb-5' onSubmit={submitHandler}>
      <div className='mb-3'>
        <span className='mr-5'> Add Title</span>
         <input className='border' type='text' id='add-todo' onChange={titleHandler} />
     </div>
     <button className='border bg-lime-200 rounded-md' type='submit'> Add Todo</button>
    </form>
)
}

export default AddTodo