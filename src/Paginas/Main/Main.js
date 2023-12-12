import { Fragment, useEffect, useState } from "react"

import "../Main/Main.css"

import Card from "../../Componentes/Card/Card"
import FormArtistas from "../../Componentes/Forms/FormArtistas"
import FormImagen from "../../Componentes/Forms/formImagen"
import FormEliminar from "../../Componentes/Forms/formElimiar"


export default function Home(){

    const [artistas,setArtistas]=useState([])
    
    const buscarInfo=async()=>{
        await fetch("http://localhost:4000/artistas/todos")
        .then((res)=>{ return res.json()})
        .then((data)=>  setArtistas(data))
        .catch((err)=>{console.log(err)})
    }

    useEffect(()=>{buscarInfo()},[])

    const [show,setShow]=useState(true)
    const [borrar,setBorrar]=useState(true)

    return(
        <div className="canvasContent">
            
                <h1>Musiquita</h1>   
            
            <main>
                <div>
                    <div className="contenedor-botones">
                        <button className="btnCRUD btn btn-success" onClick={()=>{setShow(!show)}}> Agregar Artista </button>
                        <button className="btnCRUD btn btn-primary" > Editar </button>
                        <button className="btnCRUD btn btn-danger" onClick={()=>{setBorrar(!borrar)}}> Borrar </button>

                    </div>

                        <div className="contenedor-form">
                           <FormArtistas show={show}/>
                           <FormEliminar borrar={borrar}/>
                        </div>
                    
                    <div className="conteneddor-artista-musica">
                        {artistas.map((a)=>{
                            return <div> <Card data={a}/> </div>
                            
                        })}
                    </div>
                    
                    {/**
                    <div>
                        <AlbumCard/>
                    </div> */}
                </div>
            </main>


        </div>
    )


}