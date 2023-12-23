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


     

   let cancion_artistas= canciones.filter((i)=>{return i.artista.toLowerCase() === nombre_artista.toLowerCase()})

   console.log(cancion_artistas)


    return(
    <ul class="list-group">
        {cancion_artistas.map((item)=>{
            return <li className="list-group-item">{item.titulo}</li>})}
    </ul>
    )
}