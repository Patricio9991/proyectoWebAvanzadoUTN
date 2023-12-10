import "./Card.css"
import { useState } from "react"
import swal from 'sweetalert'
import Songs from "../Songs/Songs"

export default function Card({data}){





    const [flag,setFlag]=useState(false)

    function popInfo(texto){
        swal(texto) //utlizo Sweetalert para mandar alerts sobre informacion del artista
    }

    let variable= "https://i.pinimg.com/originals/f6/7b/3b/f67b3b27e834eda7d6539a0960520266.jpg"

    
    return(
        <div className="contenedor">
            <div className="tarjetaArtista bg-primary">
                <h2>{data.nombre}</h2>
                <img src={data.imagenes} alt="..."/>
                <span>{data.imagenes}</span>
                <i>Datos generales</i>
                <p>{data.añosActividad}</p>
                <button className="btn btn-primary"onClick={()=>{popInfo(data.generos)}}>Generos</button>
                <button className="btn btn-primary"onClick={()=>{ popInfo(data.breveBio)}}>Breve Bio</button>
                <button className="btn btn-primary"onClick={()=>{ setFlag(!flag)}}>Canciones</button>
            </div>

            {flag ?<Songs/>:""}
            
          
            
        </div>
    )
}