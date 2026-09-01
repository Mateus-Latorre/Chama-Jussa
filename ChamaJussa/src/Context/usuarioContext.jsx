import { createContext, useContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)
    useEffect(() => {
         const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))
        setUsuario(usuarioLogado)   
    }, []);
    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )        
}