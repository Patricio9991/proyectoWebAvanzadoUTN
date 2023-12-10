import './form.css'

export default function FormImagen({infoArtista}){
    return(
        <form method='post' action="http://localhost:4000/artistas/nuevo" encType='multipart/form-data'> 

            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"/>

            <input type="file" name="imagen"></input>
            <input type="submit" value="enviar"></input>
        </form>
    )
}