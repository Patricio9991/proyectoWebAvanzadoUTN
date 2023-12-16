import "./Songs.css"
import { useState,useEffect } from "react"


export default function Songs({nombre_artista}){

    const [canciones,setCanciones]=useState([])
   
    
    
    const buscarCanciones=async()=>{
        const dataCanciones= await fetch("http://localhost:4000/canciones/todos")
        .then((res)=>{return res.json()})
        .then((data)=>setCanciones(data))
        .catch((err)=>{console.log(err)})

        return dataCanciones
    }

    useEffect(()=>{buscarCanciones()},[])


     

   let cancion_artistas= canciones.filter((i)=>{return i.artista === nombre_artista})

   console.log(cancion_artistas)


    return(
    <div class="list-group">
        {cancion_artistas.map((item)=>{
            return <p>{item.titulo}</p>
        })}
    </div>
    )
}