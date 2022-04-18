import Swal from 'sweetalert2';
import { useEffect } from "react/cjs/react.development";
import { useState } from 'react';
import Personaje from './Personaje';
import Loading from './Loading';

const PintarDatos = ({ nombrePersonajes }) => {

    /* estado donde se guardaran los datos para este componente y mostrarlos */
    const [personajes, setPersonajes] = useState([]);
    /* Estado para el spinner, cuando esten cargando los datos */
    const [loading, setLoading] = useState(false)
    /* El useEffect estará pendiente del cambio de nombre que coloque el usuario en el input y renderiza ese nombre */
    useEffect(() => {
        consumirApi(nombrePersonajes);
    }, [nombrePersonajes])

    const consumirApi = async (nombre) => {
        const api = `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`;
        /* spinner para cargar datos */
        setLoading(true);

        try {
            const res = await fetch(api)
            /* si no se encontro nada de lo requerido enn la api, se muestra el mensaje de alerta */
            if (!res.ok) {
                return Swal.fire({
                    title: 'Error!',
                    text: 'El personaje no fue encontrado',
                    icon: 'error',
                })
            }

            const datos = await res.json();
            setPersonajes(datos.results);
        } catch (error) {
            console.log(error);
        } finally {
            /* Para utilizar un loading o cargando datos */
            setLoading(false);
        }
    };
    return (
        <div className='row'>
            {loading && <Loading />}
            {
                personajes.map(item => (
                    <Personaje key={item.id} personaje={item} />
                ))
            }
        </div>
    )
}

export default PintarDatos
