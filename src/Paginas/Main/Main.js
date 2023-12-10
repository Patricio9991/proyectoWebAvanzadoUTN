import { Fragment, useEffect, useState } from "react"

import Button from "../../Componentes/Button/Button"
import Card from "../../Componentes/Card/Card"
import FormArtistas from "../../Componentes/Forms/FormArtistas"

import "../Main/Main.css"
import FormImagen from "../../Componentes/Forms/formImagen"


export default function Home(){

    const [artistas,setArtistas]=useState([])

    const buscarInfo=async()=>{
        await fetch("http://localhost:4000/artistas/todos")
        .then((res)=>{ return res.json()})
        .then((data)=>  setArtistas(data))
        .catch((err)=>{console.log(err)})
    }

    useEffect(()=>{buscarInfo()},[])


    return(
        <div className="canvasContent">
            
                <h1>Musiquita</h1>   
            
            <main>
                <div>
                    <div className="contenedor-botones">
                        <Button color={"btn-success"} accion={"Crear"}/>
                        <Button color={"btn-info"} accion={"Listar"}/>
                        <Button color={"btn-light"} accion={"Editar"}/>
                        <Button color={"btn-danger"}accion={"Borrar"}/>
                    </div>
                    <div className="conteneddor-artista-musica">
                    {artistas.map((a)=>{
                        return <div> <Card data={a}/> </div>
                        
                    })}

                        <div>
                           <FormArtistas/>
                         
                        </div>
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