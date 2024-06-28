// import { useProducts} from '../hooks/products'
import { Product } from './Product'
import { IProduct } from "../types/models";

interface ProductProps {
    products: IProduct[]
}

export const ProductList = ({products}: ProductProps ) => {
    // const { products } = useProducts()

    return(
        <>
        {products.map(product => <Product prod={product} key={product.id}/>)}
        </>
    )
}