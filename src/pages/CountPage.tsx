import React, {useState} from 'react';


export const CountPage = () => {
    const [count, setCount] = useState(0)

    const Increase = () => {
   
        setCount(count +1)
        console.log(count);
        
      }
    
      const Decrease = () => {
        
        setCount(prev => prev -= 1)
        console.log(count);
        
      }

    return(
        <div className='border border-purple-700'>
             <h1> Start practicing </h1>
             <button className='m-4 p-4 border border-green-900' onClick={Increase}> Increase!</button>
             <span>{count}</span>
             <button className='m-4 p-4 border border-red-700' onClick={Decrease}> Decrease!</button>
        </div>
    )
}