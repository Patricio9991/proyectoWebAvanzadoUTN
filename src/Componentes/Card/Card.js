import "./Card.css"
import { useState } from "react"
import swal from 'sweetalert'
import Songs from "../Songs/Songs"
import FormEditar from "../Forms/FromEditar"



export default function Card({data,setShowForm,showForm}){
    const [flag,setFlag]=useState(false)
    const [deleteOK,setDeleteOK]=useState(false)
    const [mensaje,setMensaje]=useState(false)
    const [flagEdit,setFlagEdit]=useState(false)
    const [dataLS,setDataLS]=useState({})


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
        .then(()=>{
           
            setTimeout(() => {
                setDeleteOK(true)
            }, 500);
            popInfo("ELIMINADO")
        })


        return respuesta

    }
    
    const editarArtista=()=>{
        
        localStorage.setItem("infoArtista",JSON.stringify(data))
        const a=JSON.parse(localStorage.getItem("infoArtista"))
        setFlagEdit(!flagEdit)
        setDataLS(a)          
}

 
        

    

    
    return(
        <div className="contenedor">
            {deleteOK === false? 
            <div className="tarjetaArtista bg-primary">
                <h2>{data.nombre}</h2>
                <img src={`http://localhost:4000/${data.imagenes}`} alt={data.nombre}/>
                <span></span>
                <i>Datos generales</i>
                <p>{data.añosActividad}</p>
                <button className="btn btn-primary"onClick={()=>{popInfo(data.generos)}}>Generos</button>
                <button className="btn btn-primary"onClick={()=>{ popInfo(data.breveBio)}}>Breve Bio</button>
                <button className="btn btn-primary"onClick={()=>{ setFlag(!flag)}}>Canciones</button>
                <button className="btn btn-danger" onClick={()=>{ setMensaje(!mensaje)}}>Eliminar Artista</button> 
                <button className="btn btn-warning" onClick={editarArtista}>Editar Artista</button>

                {mensaje === true? <div>
                    <p>¿Está seguro?</p>
                    <button onClick={()=>{eliminarDataArtista()}}>SI</button>
                    <button onClick={()=>setMensaje(!mensaje)}>NO</button>
                </div>:""}


        

            </div>:""}

            {flag ?<Songs nombre_artista={data.nombre}/>:""}
            
            {flagEdit ? <FormEditar popInfo={popInfo} dataLS={dataLS} setDataLS={setDataLS}/> :""}
            
        </div>
    )
    
    
}
