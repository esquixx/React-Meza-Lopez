import { useParams } from "react-router-dom";
import { useState, useEffect} from  "react"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer ( )  {  
    const [detail, setDetail] = useState ({})
    const { id } = useParams()

    useEffect (() => {
        const getProduct = async () => {
            const response = await fetch("/data/products.json")
            const products= await response.json()
            const filteredProduct = products.find(product => product.id === id)
            
            setDetail(filteredProduct)
        }
        getProduct()
    }, [id])
return ( 
  <ItemDetail detail={detail} />
);
}