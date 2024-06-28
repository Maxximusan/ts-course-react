import React from 'react'
import { Link} from 'react-router-dom'

export const Navigation = () => {
    return(
        <nav className='h-[50px] flex justify-start items-center px-5 bg-gray-500 text-white'>
                <Link to="/" className='mr-3'>Todo</Link>
                <Link to="/count" className='mr-3'>Count</Link>
                <Link to="/products">Products</Link>
                
        </nav>
    )
}