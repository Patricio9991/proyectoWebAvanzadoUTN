import './form.css'

export default function FormEliminar({borrar}){


    const eliminarData=async(e)=>{
        e.preventDefault()

        const form=JSON.stringify({
            nombre:e.target[0].value,

            
            
        })
        let a=document.querySelector("form")
        console.log(form)
        console.log(e)
       

        await fetch("http://localhost:4000/artistas/eliminar",{
            method:"delete",
            body:form,
            headers:{
                'Content-type':"application/json" //
            }
        })
        .then(()=>{e.target.reset()})



    }



    return(
        <form className={borrar === true? "form bg-danger ms-1 hide": "form bg-danger ms-1"} onSubmit={(e)=>eliminarData(e)}> 

            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"/>

            <input  className="btn btn-danger" type="submit" value="borrar"></input>
        </form>
    )
}