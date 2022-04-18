import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";


const App = () => {

    const [nombrePersonajes, setNombrePersonajes] = useState('');
    useEffect(() => {

        if (localStorage.getItem('nombreapi')) {
            setNombrePersonajes(JSON.parse(localStorage.getItem('nombreapi')))
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('nombreapi', JSON.stringify(nombrePersonajes))
    }, [nombrePersonajes])

    return (
        <div className="container">
            <h1>Rick and morty</h1>
            <Formulario setNombrePersonajes={setNombrePersonajes} />
            <PintarDatos nombrePersonajes={nombrePersonajes} />
        </div>
    )
}


export default App;



