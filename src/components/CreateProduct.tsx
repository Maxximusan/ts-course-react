import React, {useState} from 'react'
import axios from 'axios'

import { IProduct } from '../types/models'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct = {
    id: Date.now(),
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 45,
        count: 50
        }
}




export const CreateProduct = () => {
const [value, setValue] = useState('')
const [error, setError] = useState('')

const submitHandler = async (e: React.FormEvent) => {
e.preventDefault()
setError('')

if( value.trim().length === 0){
    setError('Please enter a valid title')
    return
}
productData.title = value

const responce = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
}



const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
setValue(e.target.value)
}

return (
    <form onSubmit={submitHandler}>
    <input 
    type='text'
    className='border py-2 px-4 mb-2 w-full outline-0'
    placeholder='Enter a product title...'
    value={value}
    onChange={changeHandler}
    />

    {error && <ErrorMessage error={error}/>}

    <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-sky-700'> Create </button>

    </form>
)
}