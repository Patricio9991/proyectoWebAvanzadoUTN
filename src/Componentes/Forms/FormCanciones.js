import './form.css'

export default function FormEliminar({infoArtista}){

    const cargarCancion=async(e)=>{
        e.preventDefault();

        const form = JSON.stringify({
          titulo: e.target[0].value,
          artista: e.target[1].value,
          disco: e.target[2].value,

    
        });
        console.log(e)
        await fetch("http://localhost:4000/canciones/agregar", {
          method: "post",
          body: form,
          headers: {
            "Content-type": "application/json", //
          },
        })
    }



    return(
        <form onSubmit={(e)=>{cargarCancion(e)}}> 

            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" name="titulo"/>

            <label htmlFor="artista">Artista</label>
            <input type="text" id="artista" name="artista"/>

            <label htmlFor="disco">Disco</label>
            <input type="text" id="disco" name="disco"/>

            <input type="submit" value="enviar"></input>
        </form>
    )
}