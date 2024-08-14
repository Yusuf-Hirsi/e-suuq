import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Quran2 from "./Quran2"

function Quran (){

    const [kutab,setkutab] =useState ([])


    const HandelQuran = ()=>{
        axios.get("https://api.alquran.cloud/v1/edition").then((response)=>{
            setkutab((response.data.data))
        }).catch((error)=>{
            console.log(error)
        })

    }


    useEffect(() =>{
        HandelQuran()
    },[])

    return <div>
        {
            kutab.map((data)=>{
                return <Quran2 items={data}/>
            })
        }

     
     
      
    </div>
}
export default Quran