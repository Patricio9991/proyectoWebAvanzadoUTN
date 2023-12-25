import { Fragment, useEffect, useState } from "react";
import "./form.css";




export default function FormArtistas({showForm,setActualizar}) {
  const [flagOk, setFlagOk] = useState(false);
  const [info_editar, set_info_editar]=useState({})
 

  const cargarData = async (e) => {
    e.preventDefault();


    const newFormData= new FormData (e.target)
   const img_poster=e.target[4].value         //Manera funcional para cargar una imagen
   newFormData.append("file",img_poster)
    
    await fetch("http://localhost:4000/artistas/nuevo", {
      method: "post",
      body:newFormData

    })
    .then(() => {
        console.log(...newFormData)
        e.target.reset()
        setFlagOk(true);
        setActualizar(true)
        setTimeout(() => {
          setFlagOk(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });


  };




  return (
    <Fragment>
      {flagOk === false ? (
        <form className={showForm === true ? "bg-success hide" : "bg-success form"}
          onSubmit={(e) => {
            cargarData(e);
          }}>

          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />

          <label htmlFor="Años Actividad">Años Actividad</label>
          <input type="text" id="añosActividad" name="aniosActividad" />

          <label htmlFor="Breve Bio">Breve Bio</label>
          <textarea id="breveBio" name="breveBio" ></textarea>

          <select id="genero" name="genero">
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

          <input type="file" name="file" id="imagenes" required/>

          <input className="btn btn-success" type="submit" value="Enviar" />
          
        </form>
      ) : (
        <p className="mensaje fs-1 text-dark d-block m-3 p-4 text-center fw-bold border border-warning bg-success">AGREGADO</p>
      )}
    </Fragment>
  );
}
