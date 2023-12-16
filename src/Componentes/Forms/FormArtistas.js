import { Fragment, useState } from "react";

import "./form.css";

export default function FormArtistas({showForm}) {
  const [flagOk, setFlagOk] = useState(false);

  const cargarData = async (e) => {
    e.preventDefault();

    const form = JSON.stringify({
      nombre: e.target[0].value,
      añosActividad: e.target[1].value,
      breveBio: e.target[2].value,
      generos: e.target[3].value,
      imagenes:e.target[4].files[0]

    });
    
    await fetch("http://localhost:4000/artistas/nuevo", {
      method: "post",
      body: form,
      headers: {
        "Content-type": "application/json", //
      },
    })

      .then(() => {
        setFlagOk(true);
        setTimeout(() => {
          setFlagOk(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });


      console.log(form)
      console.log(e.target[4].files[0])
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
          <input type="text" id="añosActividad" name="añosActividad" />

          <label htmlFor="Breve Bio">Breve Bio</label>
          <textarea id="breveBio" name="breveBio"></textarea>

          <label htmlFor="Generos">Generos</label>
          <input type="text" id="generos" name="generos" />

          <input type="file" name="file" id="imagenes"/>

          <input className="btn btn-success" type="submit" value="Enviar" />
        </form>
      ) : (
        <p className="mensaje fs-1 text-dark d-block m-3 p-4 text-center fw-bold border border-warning bg-success">Artista cargado con exito</p>
      )}
    </Fragment>
  );
}
