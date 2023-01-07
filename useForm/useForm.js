import { useState } from "react";


export const useForm = (initialForm={}) => {
  
    const [formState, setFormState] = useState(initialForm);
        
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          //Destructurar para mantener todos los valores del formulario
          ...formState,
          //Propiedades computadas de los objetos (?)
          [name]: value,
        });
      };

      const onResetForm=()=>{
        setFormState(initialForm);
      }
           

    return{
        ...formState,
           formState,
           onInputChange,
           onResetForm
    }
}


/**/