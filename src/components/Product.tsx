import { useState } from "react";
import { IProduct } from "../types/models";

interface ProductProps {
    prod: IProduct
}

export const Product = (props: ProductProps) => {

// console.log(props);
const {prod} = props

const [details, setDetails] = useState(false)

// this alternative variant for change btn
const btnBgClassName = details ? 'bg-blue-400' :' bg-yellow-400' 
const btnClasses = ['py-2 px-2 border', btnBgClassName ]


const showHideDetails = () =>{
    setDetails(prev => !prev)
}



    return(
        <>
        <h2 className="m-6 text-2xl"> Product </h2>
        <div className="border border-r-cyan-500 py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={prod.image} className="w-1/6" alt={prod.title} />
        <p>{prod.title}</p>
        <p>{prod.price}</p>

        {/* this alternative variant for change btn */}
        <button onClick={showHideDetails} className={btnClasses.join(' ')}> 
            { details ? 'Hide Details' : 'Show Details'}
        </button>

{/* OR my variant (primary*/}

{/* { details ? 
<button onClick={showHideDetails} className="py-2 px-2 border bg-blue-400"> Hide Details</button>
 : 
<button onClick={showHideDetails} className="py-2 px-2 border bg-yellow-400"> Show Details</button>
} */}
        
        { details && <div>
            <p> {prod.description}</p>
             <p>Rate: <span className="font-bold">{prod.rating.rate}</span> </p>
        </div> }
        </div>
        </>
    )
}