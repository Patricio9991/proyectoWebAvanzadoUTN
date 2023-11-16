import { Fragment, useEffect, useState } from "react"

import Button from "../../Componentes/Button/Button"
import Card from "../../Componentes/Card/Card"

import "../Main/Main.css"


export default function Home(){

    return(
        <div className="canvasContent">
            
                <h1>Musiquita</h1>   
            
            <main>
                <div >
                    <div>
                        <Card/>
                    </div>
                   {/** <div>
                        <Songs/>
                    </div>
                    <div>
                        <AlbumCard/>
                    </div> */}
                </div>
            </main>


        </div>
    )


}