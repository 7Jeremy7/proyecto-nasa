
import './App.css';
import  MostrarInfo  from './Components/AstronomyPicture';

 
interface Diseño {
  theme: {
    backgroundColor: string,
    color: string,
    
  }
}

const diseño: Diseño = {
  theme: {
    backgroundColor:'white',
    color: 'green',
  },
};


function App() {
  return (
    <div className={diseño.theme.color}>
      <h1>Imagen Astronómica del Día</h1>
    < MostrarInfo/>
  </div>
  )
}

export default App






/* interface Person {
  name: string,
  theme: {
    background: string,
    color: string,
  }
} */

//con ant design hacer una tarjeta de superhero