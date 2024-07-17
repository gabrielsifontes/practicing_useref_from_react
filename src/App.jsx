// Actividad hecha en 2024-07-16, del curso Curso de REACT (2021) - JAB (YouTube)

import imagenRey1 from "./images/rey_atanagildo.png"
import imagenRey2 from "./images/rey_leogivildo.png"
import imagenRey3 from "./images/rey_sisebuto.png"
import imagenSinRey from "./images/sin_rey.png"


import { useRef } from "react"

import './App.css'




function App() {
  let nombres = ["Atanagildo", "Logivildo", "Sisebuto"]
  let imagenes = [imagenRey1, imagenRey2, imagenRey3]
  const refTextoRey = useRef()
  const refImagenRey = useRef()

  function cambiarTexto(event, nombre) {
    console.log("a")
    if(event.target.innerText == nombre) {
      event.target.innerText = "Vacio"      
    }
    else if(event.target.innerText == "Vacio") {
      event.target.innerText = nombre
    }
  }


  function cambiarImagen(event, imagen) {
    if(event.target.src.includes(imagen)) {
      console.log("1")
      event.target.src = imagenSinRey
      event.target.parentNode.style.backgroundColor = "white"     
    }
    else if(event.target.src.includes(imagenSinRey)) {
      console.log("2")
      event.target.src = imagen
      event.target.parentNode.style.backgroundColor = "rgba(226,161,25,255)"     
    }
  }




  return (
    <>
      <h1>Practicando el useRef de React.js</h1>

      <p>Haz click en los reyes y en sus nombre para ver los cambios.</p>


      <div className='contenedor'>
        <div className='caja'>                      
          <img src={imagenes[0]} ref={refImagenRey.current} onClick={(e)=> cambiarImagen(e, imagenes[0])} />

          <div 
            ref={refTextoRey}
            onClick={(e)=> cambiarTexto(e, nombres[0])}          
            className="nombre">
              {nombres[0]}
          </div>

        </div>

        <div className='caja'>                      
          <img src={imagenes[1]} ref={refImagenRey.current} onClick={(e)=> cambiarImagen(e, imagenes[1])} />

          <div 
            ref={refTextoRey}
            onClick={(e)=> cambiarTexto(e, nombres[1])}          
            className="nombre">
              {nombres[1]}
          </div>

        </div>

        <div className='caja'>                      
          <img src={imagenes[2]} ref={refImagenRey.current} onClick={(e)=> cambiarImagen(e, imagenes[2])} />

          <div 
            ref={refTextoRey}
            onClick={(e)=> cambiarTexto(e, nombres[2])}          
            className="nombre">
              {nombres[2]}
          </div>

        </div>
        
      </div>

    </>
  )
}

export default App
