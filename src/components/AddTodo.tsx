import React, {useRef} from 'react';

const AddTodo: React.FC = () => {
    const titleInputRef = useRef<HTMLInputElement>(null)

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        console.log(titleInputRef.current?.value);
        
}

    return (
    <form onSubmit={submitHandler}>
      <div>
        <span> Add Title</span>
         <input type='text' id='add-todo' ref={ titleInputRef} />
     </div>
     <button type='submit'> Add Todo</button>
    </form>
)
}

export default AddTodo