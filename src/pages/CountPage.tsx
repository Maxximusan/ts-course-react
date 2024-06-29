import React, { useRef, useEffect, useReducer} from 'react';

//тренирую useReducer
function countReducer(state:any, action:any){
switch(action.type){
    case 'unit-increment':
        return {...state, unitCount: state.unitCount + action.payload};

    case 'tens-increment':
        return {...state, tensCount: state.tensCount + action.payload};

    case 'hundred-increment':
        return {...state, hundredCount: state.hundredCount + action.payload};

    case 'unit-decrement':
        return {...state, unitCount: state.unitCount - action.payload};

    case 'tens-decrement':
        return {...state, tensCount: state.tensCount - action.payload};

    case 'hundred-decrement':
        return {...state, hundredCount: state.hundredCount - action.payload};

        default:
            throw new Error(`Unsupoted action type ${action.type}`)
}
}

export const CountPage = () => {
  
    const isFirstRender = useRef(true)
    const [state, dispatch] = useReducer(countReducer, {
        unitCount: 0,
        tensCount: 0,
        hundredCount: 0
    })
useEffect(() => {
    //игнорирую первый рендер
    if(isFirstRender.current){
        isFirstRender.current = false;
    return
    }
    // console.log(isFirstRender);
    console.log(state);
    
    
},[state])

    // const Increase = () => {
   
    //     setCount(count +1)
    //     // console.log(count);
        
    //   }
    
    //   const Decrease = () => {
        
    //     setCount(prev => prev - 1)
    //     // console.log(count);
        
    //   }

    return(
        <>
        <h1 className='text-center text-3xl mb-5'> Counters </h1>
        <div className='border border-purple-700 flex justify-around'>
          <div>
             <h2 className='text-center'> Unit Counter </h2>
             <button className='m-4 p-4 border border-green-900' onClick={() => dispatch({type: 'unit-increment', payload: 1})}> Increase!</button>
             <span>{state.unitCount}</span>
             <button className='m-4 p-4 border border-red-700' onClick={() => dispatch({type: 'unit-decrement', payload: 1})}> Decrease!</button>
          </div>

          <div>
             <h2 className='text-center'> Tens Counter </h2>
             <button className='m-4 p-4 border border-green-900' onClick={() => dispatch({type: 'tens-increment', payload: 10})}> Increase!</button>
             <span>{state.tensCount}</span>
             <button className='m-4 p-4 border border-red-700' onClick={() => dispatch({type: 'tens-decrement', payload: 10})}> Decrease!</button>
          </div>

          <div>
             <h2 className='text-center'> Hundred Counter </h2>
             <button className='m-4 p-4 border border-green-900' onClick={() => dispatch({type: 'hundred-increment', payload: 100})}> Increase!</button>
             <span>{state.hundredCount}</span>
             <button className='m-4 p-4 border border-red-700' onClick={() => dispatch({type: 'hundred-decrement', payload: 100})}> Decrease!</button>
          </div>
        </div>

    
        </>
    )
}