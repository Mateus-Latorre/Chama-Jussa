import { createContext, useState } from "react";
import axios from "axios"
import { Alert } from "react-native";
import api from "../Componentes/services/service"

export const jussaContext = createContext()
export const JussaProvider = ({ children }) => {
    const [listagemChamadas, setListagemChamadas] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [tituloChamada, setTituloChamada] = useState("");
    const [maquinaChamada, setMaquinaChamada] = useState("");
    const [local, setLocal] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [idToEdit, setIdToEdit] = useState(0);

    const getChamada = async () => {
        try {
            const APIReturn = await api.get("/api/OrdemServico")
            const APIData = await APIReturn.data

            setListagemTarefas(APIData)

        }
        catch (error) {
            console.log("Deu ruim ai");
            console.log(error)
        }
    }

    const postChamada = async (chamadaValue) => {

        await api.post("/ordemServico", { Descricao: descricao, Titulo: tituloChamada, Lugar: local, Equipamento: maquinaChamada })
        
        const [descricao, setDescricao] = useState("");
        const [tituloChamada, setTituloChamada] = useState("");
        const [maquinaChamada, setMaquinaChamada] = useState("");
        const [local, setLocal] = useState("");
        await getChamada()
    }

    const putTaskPreview = async (chamada) => {

        setTaskValue(chamada.descricao)
        setEditMode(true)
        setIdToEdit(chamada.id)
    }
    const putTask = async (tarefa) => {
        try {
            await api.put(`/taskPoint/${idToEdit}`, { descricao: chamadaValue });
            await getChamada()
            setIdToEdit(0)
            setEditMode(false)
            setTaskValue("")

        } catch (error) {
            console.log("deu ruim viu bixo")
            console.log(error)
        }
    }

    const deleteTask = async (id) => {

        try {
            await api.delete(`/taskPoint/${id}`)
            await getChamada()

        }
        catch (error) {

            Alert.alert("deu ruim ai amigo(a)", `${error}`)
            console.log(error)
        }
    }

    return (
        <jussaContext.Provider value={{ listagemChamadas, setListagemChamadas, descricao, setDescricao, local, setLocal, tituloChamada, maquinaChamada, setMaquinaChamada, setTituloChamada, editMode, setEditMode, idToEdit, setIdToEdit, postChamada }}>
            {children}
        </jussaContext.Provider >
    )
}