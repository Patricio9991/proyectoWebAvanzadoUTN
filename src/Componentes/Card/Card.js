import "./Card.css"
import { useState } from "react"
import swal from 'sweetalert'
import Songs from "../Songs/Songs"


export default function Card({data}){
    const [flag,setFlag]=useState(false)

    function popInfo(texto){
        swal(texto) //utlizo Sweetalert para mandar alerts sobre informacion del artista
    }

 
    const eliminarDataArtista=async()=>{
        let nombreArtista=data.nombre

        let respuesta= await fetch('http://localhost:4000/artistas/eliminar',{
            method:'delete',
            body:JSON.stringify({nombre:nombreArtista}),
            headers:{
                'Content-type':"application/json" //
            }
        })
        .then((data)=>{return data.json()})

        return respuesta

    }

    
    return(
        <div className="contenedor">
            <div className="tarjetaArtista bg-primary">
                <h2>{data.nombre}</h2>
                <img src={`http://localhost:4000/${data.imagenes}`} alt={data.nombre}/>
                <span></span>
                <i>Datos generales</i>
                <p>{data.añosActividad}</p>
                <button className="btn btn-primary"onClick={()=>{popInfo(data.generos)}}>Generos</button>
                <button className="btn btn-primary"onClick={()=>{ popInfo(data.breveBio)}}>Breve Bio</button>
                <button className="btn btn-primary"onClick={()=>{ setFlag(!flag)}}>Canciones</button>
                <button className="btn btn-danger"onClick={eliminarDataArtista}>Eliminar Artista</button>
            </div>

            {flag ?<Songs nombre_artista={data.nombre}/>:""}
            
          
            
        </div>
    )
}