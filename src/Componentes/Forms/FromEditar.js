import { Fragment, useEffect, useState} from "react";




export default function FormEditar({dataLS,setDataLS}){
   
    

    const guardarCambios=async(e)=>{
        e.preventDefault();
        console.log(e)
        console.dir(e)

       

        const newBody=new FormData (e.target)
        const numeroMagico=dataLS.id

        console.log(numeroMagico)
        console.log(newBody)
       

        await fetch(`http://localhost:4000/artistas/editar/${numeroMagico}`,{
            method:"put",
            body:newBody
         })

        
    }


    const cambioValor=(e)=>{
        console.log(e)
        setDataLS({...dataLS,[e.target.name]:e.target.value})
        
    }


    return(
        
            
    <form className="list-group" onSubmit={(e)=>{guardarCambios(e)}}>

          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={dataLS.nombre} onChange={((e)=>{cambioValor(e)})}/>

          <label htmlFor="Años Actividad">Años Actividad</label>
          <input type="text" id="añosActividad" name="añosActividad" value={dataLS.añosActividad} onChange={((e)=>{cambioValor(e)})}/>

          <label htmlFor="Breve Bio">Breve Bio</label>
          <textarea id="breveBio" name="breveBio" value={dataLS.breveBio} onChange={((e)=>{cambioValor(e)})}></textarea>

          <select id="genero" name="generos" value={dataLS.generos} onChange={((e)=>{cambioValor(e)})}>
            <option value="Rock">Rock</option>
            <option value="Punk">Punk</option>
            <option value="Post-punk">Post-punk</option>
            <option value="Jazz"> Jazz</option>
            <option value="Funk">Funk</option>
            <option value="City-Pop">City-Pop</option>
            <option value="Indie">Indie</option>
            <option value="Experimental">Experimental</option>
            <option value="New Wave">New Wave</option>
        </select>

        <input type="submit" value="Guardar cambios"></input>


    </form>

    )
}