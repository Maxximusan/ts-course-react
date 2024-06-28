import  {useState, useEffect} from 'react';
import axios from 'axios'
import { IProduct } from '../types/models';


export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
  
  function addProduct(product: IProduct){
    setProducts(prev => [...prev, product])
  }


  const fetchProducts = async  () => {
    try{
      setError('')
      setLoading(true)
      const responce = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
     console.log(responce);
     setProducts(responce.data)
     setLoading(false)
     //  return responce.data
    } catch(e){
      
     if (axios.isAxiosError(e)){
      console.log(e.status);
      console.error(e.response)
      console.log(e.message);
      
      
      setLoading(false)
      setError(e.message)
      } else{
        console.error(e);
        console.log(e);
              
      }
       
    }
  
  }
  
    useEffect(()=> {
      fetchProducts()
    },[])

    return { loading, error, products, addProduct}
}