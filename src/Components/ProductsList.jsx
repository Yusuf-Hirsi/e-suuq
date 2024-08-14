import Product from "./Products"
import Header from './Header.jsx'
import axios from "axios"
import { useState,useEffect } from "react"
import Cliploader from "react-spinners/ClipLoader"

function ProductList (){

    const [product ,setProduct]=useState([])
    const[search, setSearch] = useState("")
    const [loading, setloading] = useState (false)
     
    
    const handeleSearch = (event)=>{
      Event.preventDefault()
      setSearch(event.target.value)
    }

    const HandleGetProduct =()=>{
      setloading (true)
            axios.get("https://fakestoreapi.in/api/products").then((response)=>{
                        setProduct((response.data.products))
                        setloading(false)
            }).catch((erro)=>{
                console.log(erro)
            })
    }

    useEffect(()=>{
        HandleGetProduct()
    },[])




    return  <div>
      <Header searches={handeleSearch}/>
      <div className="pt-[50px]">
      <div className="grid ml-[50px] sm:grid-cols-[300px_300px_300px_300px] grid-cols-1">
      
      {
        loading== true? <Cliploader size={50} id="loader" loading={loading}/> :
        product.filter(  (items) => {
          return search.toLowerCase() == "" ? items
          :items.title.toLowerCase().includes(search.toLowerCase())
        
        }).map((data)=>{
              return <Product items={data} />
          })
      }
</div>
      </div>
    
    
    
   

    </div>
}

export default ProductList