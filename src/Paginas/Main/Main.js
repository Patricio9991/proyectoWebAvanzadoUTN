import {  useEffect, useState } from "react"

import "../Main/Main.css"

import Card from "../../Componentes/Card/Card"
import FormArtistas from "../../Componentes/Forms/FormArtistas"
import FromCanciones from '../../Componentes/Forms/FormCanciones'





export default function Home(){

    const [artistas,setArtistas]=useState([])
    const [actualizar,setActualizar]=useState(false)
    

    //estados botones
    const [showForm,setShowForm]=useState(true)
    const [showArtistas,setShowArtistas]=useState(true)
    const [songForm, setSongForm]=useState(true)

    
    

    const buscarInfoArtistas=async()=>{
        const info= await fetch("http://localhost:4000/artistas/todos")
        .then((res)=>{ return res.json()})
        .then((data)=> setArtistas(data))
        .catch((err)=>{console.log(err)})  
        
        return info
    }


    useEffect(()=>{buscarInfoArtistas()},[])

    useEffect(()=>{buscarInfoArtistas()},[actualizar])

    



    return(
    <div className="bg">
        <div className="canvasContent">
             
                <h1>Musiquita</h1>   
            
            <main>
                <div>
                    <nav className="contenedor-botones">
                      
                        <button className="btnCRUD btn btn-success" onClick={()=>{setShowForm(!showForm)}}> Agregar Artista </button>

                        <button  className="btnCRUD btn btn-dark" onClick={()=>{setSongForm(!songForm)}}>Agregar canciones</button>

                        <button className="btnCRUD btn btn-primary" onClick={()=>{setShowArtistas(!showArtistas)}} > Mostrar Atistas </button>
                    </nav>

                        <section className="seccion-formulario">
                        <FormArtistas showForm={showForm}  setActualizar={setActualizar}/>
                        <FromCanciones showSongsForm={songForm} />
                        </section>

                    
                    <div className={showArtistas === false? "conteneddor-artista-musica":"conteneddor-artista-musica ocultar"}>
                        {artistas.map((a)=>{
                            return  <Card key={a.id} data={a} setShowForm={setShowForm} showForm={showForm} />
                            
                        })}
                    </div>
                </div>
            </main>
            

        </div>
    </div>
    )


}