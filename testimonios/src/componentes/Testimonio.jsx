import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){

  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        // se utilizan comillas invertidas en la imagen para permiten insertar codigo de js dentro de la cadena de caracteres alt gr + ctrl + tecla comillas invertidas
        src={require(`../imagenes/testimonio-${props.imagen}.jpeg`)} 
        alt='Foto testimonio 01' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong>  en {props.pais}</p>
        <p className='cargo-testimonio'> {props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'> "{props.testimonio}" </p>
      </div>
    </div>
  );
}

export default Testimonio; 


