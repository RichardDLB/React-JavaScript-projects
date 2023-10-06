import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre el programa</h1>
        <Testimonio
          nombre='Violeta Orrego'
          pais='Argentina'
          imagen='viole'
          cargo='Docente'
          empresa='Stanford College'
          testimonio='Con el generador de texto en línea puede procesar su Lorem Ipsum personal enriqueciéndola con elementos html que definen su estructura, con la posibilidad de insertar enlaces externos, pero no solo.
          ¡Ahora para componer un texto Lorem Ipsum es mucho más divertido!          
          De hecho, insertando cualquier texto de fantasía o un texto famoso, ya sea un poema, un discurso, un pasaje literario, el texto de una canción, etc., nuestro generador de texto proporcionará la extracción aleatoria de términos y pasos para componer su propio Lorem Ipsum exclusivo.' />

        <Testimonio
          nombre='Richard'
          pais='Colombia'
          imagen='rich'
          cargo='Desarrollador Web Full Stack'
          empresa='accenture'
          testimonio='Con el generador de texto en línea puede procesar su Lorem Ipsum personal enriqueciéndola con elementos html que definen su estructura, con la posibilidad de insertar enlaces externos, pero no solo.
          De hecho, insertando cualquier texto de fantasía o un texto famoso, ya sea un poema, un discurso, un pasaje literario, el texto de una canción, etc., nuestro generador de texto proporcionará la extracción aleatoria de términos y pasos para componer su propio Lorem Ipsum exclusivo.' />

<Testimonio
          nombre='Richard'
          pais='Colombia'
          imagen='rich'
          cargo='Desarrollador Web Full Stack'
          empresa='accenture'
          testimonio='Con el generador de texto en línea puede procesar su Lorem Ipsum personal enriqueciéndola con elementos html que definen su estructura, con la posibilidad de insertar enlaces externos, pero no solo.
          De hecho, insertando cualquier texto de fantasía o un texto famoso, ya sea un poema, un discurso, un pasaje literario, el texto de una canción, etc., nuestro generador de texto proporcionará la extracción aleatoria de términos y pasos para componer su propio Lorem Ipsum exclusivo.' />


      </div>
    </div>
  );
}

export default App;
