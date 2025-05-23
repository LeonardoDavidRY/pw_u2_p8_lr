import axios from "axios";

const consultarRespuesta= async()=>{
    const respuesta = axios.get('https://yesno.wtf/api').then(r => r.data);
    console.log();
    return respuesta;
}

//Funciones fachada

export const consultarRespuestaFachada= async()=>{
    return await consultarRespuesta();
}
