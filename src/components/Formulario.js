import { useContext } from 'react'
import { FrasesContext } from '../context/FrasesContext'


const Formulario = () => {

    const { consultarApi } = useContext( FrasesContext )
   
  return (

    <div>
          <button 
                onClick={() => consultarApi()}
                className="btn"
          >
             Buscar Frase
          </button>
    </div>

  )
}

export default Formulario