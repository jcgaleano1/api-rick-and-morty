import {useState} from 'react';

/* ESTOS HOOKS SON FUNCIONES QUE SE VAN A USAR EN OTRO COMPONENTE */
export const useFormulario = (initialState = {}) => {

     const[inputs, setInputs] = useState(initialState);

     const handleChange = (e) => {
        const {name, value} = e.target;
        /* old representa el estado inicial, initialState */
        setInputs((old) => ({
            ...old,/* se hace una copia del objeto anterior, que es initialState */
            [name]: value,
        }));
     }

     const reset = () => {
         setInputs(initialState)
     }

    return [inputs, handleChange, reset]
}

