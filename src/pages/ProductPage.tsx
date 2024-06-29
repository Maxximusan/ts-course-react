import React, {useContext} from 'react';


import { ProductList } from '../components/ProductList'
// import {products} from './data/products'

import { useProducts} from '../hooks/products'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage';
import {Modal} from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct';
import { IProduct } from '../types/models';
import { ModalContext} from '../context/ModalContext'



const ProductPage = () => {
    // const [modal, setModal] = useState(false)
  const {modal, open, close} = useContext(ModalContext)
 
  const { loading, error, products, addProduct} = useProducts()

  
  
  const createHandler = (product: IProduct) => {
    // setModal(false);
    close()
    addProduct(product)
  }

  const closeModal = () => {
    // setModal(false);
    close()
  }

  const openModal = () => {
    open()
  }
  return (
    <div className="App">
    

      <div className=' container mx-auto max-w-2xl pt-5'>
        {loading && <Loader/>} 
        {error && <ErrorMessage error={error}/>}
        <ProductList products={products}/>
      </div>

    { modal && <Modal title='Create a new product' onClose={closeModal} >
                  <CreateProduct onCreate= {createHandler}/>
               </Modal> }

       <button onClick={openModal} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2-xl px-4 py-2'> + </button>

      
    </div>
  );
  // return React.createElement('h2', {className:'wow'}, 'HELLO')
}

export default ProductPage