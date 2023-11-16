import "./Card.css"
import { useState } from "react"

export default function Card(){

    const [bio,setBio]=useState(false)
    const [gen,setGen]=useState(false)




    return(
        <div className="contenedor">
            <div className="tarjetaArtista bg-primary">
                <h2>Lana del Rey</h2>
                <img src="https://i.pinimg.com/originals/f6/7b/3b/f67b3b27e834eda7d6539a0960520266.jpg" alt="..."/>
                <span>Lana del Rey durante la era de Honeymoon</span>
                <i>Datos generales</i>
                <p>1985</p>
                <p>Activa</p>
                <button className="btn btn-primary"onClick={()=>{return setGen(!gen)}}>Generos</button>
                <button className="btn btn-primary"onClick={()=>{ return setBio(!bio)}}>Bio</button>
            </div>
            
            <div className="contenedor-info">
                <p className={`bio ${gen ? "":"hidden"}`}>Generos: Indie pop, pop barroco, trip hop, Sadcore, dream pop, indie rock, Slowcore, rock psicodélico, pop psicodélico, rock y rhythm and blues</p>
                <p className={`bio ${bio ? "":"hidden"}`}>Elizabeth Woolridge Grant (Nueva York, 21 de junio de 1985),conocida artísticamente como Lana Del Rey, es una cantante, compositora, modelo, actriz, escritora, productora y poetisa estadounidense. Su música se destaca por su estilizada calidad cinematográfica, su estilo retro y la exploración del romance trágico, el glamur y la melancolía, con frecuentes referencias a la cultura pop contemporánea y la estadounidense de los años 1950 y 1960.</p>
            </div>
            
        </div>
    )
}