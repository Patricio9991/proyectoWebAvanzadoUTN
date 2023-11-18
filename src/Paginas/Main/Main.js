import { Fragment, useEffect, useState } from "react"

import Button from "../../Componentes/Button/Button"
import Card from "../../Componentes/Card/Card"
import Songs from "../../Componentes/Songs/Songs"

import "../Main/Main.css"


export default function Home(){

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
                        <div>
                            <Card/>
                        </div>
                        <div>
                            <Songs/>
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