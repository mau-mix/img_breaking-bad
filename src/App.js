import FrasesProvider from "./context/FrasesContext";
import Formulario from "./components/Formulario";
import Frase from "./components/Frase";


function App() {
    
  
  return (

     <FrasesProvider>
           <div className="contenedor">
<               Formulario />
               <Frase />

           </div>
          

     </FrasesProvider>     
  );
     
    
}

export default App;
