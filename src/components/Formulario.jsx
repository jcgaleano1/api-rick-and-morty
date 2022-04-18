import { useFormulario } from "../hooks/useFormulario"
import Swal from 'sweetalert2';

const Formulario = ({setNombrePersonajes }) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    });

    const {nombre} = inputs;

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(!nombre.trim()){
         return Swal.fire({
             title: 'Error!',
             text: 'El campo no debe estar vacío',
             icon: 'error',
         })
      }

      setNombrePersonajes(nombre.trim().toLowerCase());
      reset();
    }

    return (
        <form onSubmit={handleSubmit}>
             <input type="text"
             placeholder="Ingrese personaje"
             className="form-control mb-2"
             value={nombre}
             onChange={handleChange} 
             name="nombre"/>
             <button type="submit" className="btn btn-dark mb-5">Buscar</button>
        </form>
    )
}

export default Formulario;
