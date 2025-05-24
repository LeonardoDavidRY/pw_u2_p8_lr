import axios from "axios";

const obtenerConsejo = async () => {
    const respuesta = await axios.get(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
    return respuesta.data;
};

export const obtenerConsejoFachada = async () => {
    return await obtenerConsejo();
};