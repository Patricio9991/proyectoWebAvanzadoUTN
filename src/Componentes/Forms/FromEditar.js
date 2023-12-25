import { Fragment, useEffect, useState} from "react";




export default function FormEditar({popInfo,dataLS,setDataLS}){
    const [edit,setEdit]=useState(true)
    

    const guardarCambios=async(e)=>{
        e.preventDefault();
        console.log(e)
        console.dir(e)

       

        //const newBody=new FormData (e.target)
        const numeroMagico=dataLS.id 
        
        
        const body_form={
            nombre:e.target[0].value,
            añosActividad:e.target[1].value,
            breveBio:e.target[2].value,
            generos:e.target[3].value
        }
        
       console.log("Form en el submit"+body_form)

        await fetch(`http://localhost:4000/artistas/editar/${numeroMagico}`,{
            method:"put",
            body:JSON.stringify(body_form),
            headers: {
                "Content-type": "application/json", 
            }
        })
        .then((data)=>{return data.json()})
        .then((res)=>{console.log(res)})
        .then(()=>{
            localStorage.removeItem("infoArtista");
            
            setTimeout(()=>{
                setEdit(false)
                popInfo("Info Actualizada")
            },500)
            
        } )
        
        
        
    }

    useEffect(()=>{
        console.log("data en el use effect"+ dataLS)
        setDataLS(dataLS)
    },[edit])

    const cambioValor=(e)=>{
        console.log(e)
        setDataLS({...dataLS,[e.target.name]:e.target.value})
        
    }


    return(

<Fragment>
    {edit === true? 
        <form className="list-group bg-warning " onSubmit={(e)=>{guardarCambios(e)}}>

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


        </form>:""}
</Fragment>  

    )

}