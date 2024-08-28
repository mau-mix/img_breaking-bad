import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const FrasesContext = createContext()

const FrasesProvider = ( props ) => {
      
    const [ frase, setFrase ] = useState([])

    const consultarApi = async () => {
        
        const Api = "https://api.breakingbadquotes.xyz/v1/quotes"
        const frase = await axios.get( Api )
        setFrase( frase.data[0] )
    }
    useEffect(() => {
        consultarApi()
    },[])
    
   

    return (

        <FrasesContext.Provider
                      value={{
                          frase,
                          consultarApi
                      }}
        >
               { props.children }
        </FrasesContext.Provider>
    )

}
export default FrasesProvider
