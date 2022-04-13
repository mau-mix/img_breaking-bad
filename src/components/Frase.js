
import { useContext } from 'react'
import { FrasesContext } from '../context/FrasesContext'

const Frase = () => {

     const { frase } = useContext( FrasesContext )
    
    

  return (
    <div className='informacion'>
        <p className='quote'>Frase: <span>{frase.quote}</span></p>
        <p className='autor'>Autor: <span>{frase.author}</span></p>
    </div>
  )
}

export default Frase