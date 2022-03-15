import Titulo from '../titulo/titulo';

function Input( {placeholder, saludo} ) {
    return(
      <>
        <input placeholder={ placeholder }/>
        <button onClick={saludo}>Ingresar</button>
      </>
    )
    
  }

export default Input