import { Fragment, useEffect, useState } from "react"

import "../Main/Main.css"

import Card from "../../Componentes/Card/Card"
import FormArtistas from "../../Componentes/Forms/FormArtistas"
import FromCanciones from '../../Componentes/Forms/FormCanciones'



export default function Home(){

    const [artistas,setArtistas]=useState([])
    
    

    const buscarInfoArtistas=async()=>{
        const info= await fetch("http://localhost:4000/artistas/todos")
        .then((res)=>{ return res.json()})
        .then((data)=> setArtistas(data))
        .catch((err)=>{console.log(err)})

       
    }


    useEffect(()=>{buscarInfoArtistas()},[])

    const [showForm,setShowForm]=useState(true)
    const [showArtistas,setShowArtistas]=useState(true)

    return(
    <div className="bg">
        <div className="canvasContent">
             
                <h1>Musiquita</h1>   
            
            <main>
                <div>
                    <nav className="contenedor-botones">
                      
                        <button className="btnCRUD btn btn-success" onClick={()=>{setShowForm(!showForm);console.log(showForm)}}> Agregar Artista </button>
                        <button className="btnCRUD btn btn-primary" onClick={()=>{setShowArtistas(!showArtistas)}} > Mostrar Atistas </button>
                    </nav>

                        
                        <FormArtistas showForm={showForm}/>
                        <FromCanciones/>
                        
                    {showArtistas === false ? 
                    <div className="conteneddor-artista-musica">
                        {artistas.map((a)=>{
                            return  <Card data={a}/>
                            
                        })}
                    </div>: <p className="mensaje fs-1 text-warning d-block m-3 p-4 text-center 
                        fw-bold border border-warning bg-primary">Click en mostrar artistas para comenzar</p>
                    }
                    {/**
                    <div>
                        <AlbumCard/>
                    </div> */}
                </div>
            </main>
            

        </div>
    </div>
    )


}