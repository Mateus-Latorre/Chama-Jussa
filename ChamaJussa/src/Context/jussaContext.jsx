import { createContext, useState } from "react";
import { Alert } from "react-native";
import api from "../Componentes/services/service";
import { useRouter } from "expo-router";

export const jussaContext = createContext();

export const JussaProvider = ({ children }) => {
    const [listagemChamadas, setListagemChamadas] = useState([]);
    const [chamadaUnica, setChamadaUnica] = useState([]);
    const [listagemNotificacao, setlistagemNotificacao] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [statusChamada, setStatusChamada] = useState("");
    const [tituloChamada, setTituloChamada] = useState("");
    const [maquinaChamada, setMaquinaChamada] = useState("");
    const [local, setLocal] = useState("");
    const [imagem, setImagem] = useState(null); // Adicionado para suportar a foto
    const [editMode, setEditMode] = useState(false);
    const [idToEdit, setIdToEdit] = useState(null);

    const route = useRouter();
 const paginaMinhasOS = () => {
    route.push("/minhasOS/")
  }
      const paginaCadOS = () => {
    route.push("/cadastroServico/cadServico")
  }

    // 1. LISTAR ORDENS DE SERVIÇO
    const getChamada = async () => {
        try {
            const resposta = await api.get("/OrdemServico");
            setListagemChamadas(resposta.data);
        } catch (error) {
            console.log("Erro ao buscar chamadas:", error.response?.data || error.message);
        }
    };
const getIdChamada = async (id) => {
    try {
        const resposta = await api.get(`/OrdemServico/${id}`);
        setChamadaUnica(resposta.data ? [resposta.data] : []);
    } catch (error) {
        console.log("Erro ao buscar chamada única:", error.response?.data || error.message);
        setChamadaUnica([]); 
    }
};
    const getNotificacao = async () => {
        try {
            const resposta = await api.get(`/Notificacao/${idUsuario}`);
            setlistagemNotificacao(resposta.data);
        } catch (error) {
            console.log("Erro ao buscar chamadas:", error.response?.data || error.message);
        }
    };

    // 2. CRIAR ORDEM DE SERVIÇO
    const postChamada = async () => {
        try {
            const formData = new FormData();

            formData.append("Titulo", tituloChamada);
            formData.append("Lugar", local); 
            formData.append("Descricao", descricao);
            formData.append("Equipamento", maquinaChamada || "");

            // Anexa a imagem caso tenha sido selecionada pelo ImagePicker
            if (imagem) {
                formData.append("FotoUrl", {
                    uri: imagem.uri || imagem,
                    name: `os_${Date.now()}.jpg`,
                    type: "image/jpeg",
                });
            }

            await api.post("/OrdemServico", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            Alert.alert("Sucesso", "Ordem de serviço cadastrada!");

            // Limpa o formulário
            setTituloChamada("");
            setMaquinaChamada("");
            setLocal("");
            setDescricao("");
            setImagem(null);
            paginaMinhasOS()
            // Atualiza a lista
            await getChamada();

        } catch (error) {
            console.log("Erro da API ao criar OS:", error.response?.data || error.message);
            Alert.alert("Erro", "Não foi possível cadastrar a ordem de serviço.");
        }
    };

    const editChamada = (chamada) => {
        setTituloChamada(chamada.titulo);
        setLocal(chamada.lugar);
        setDescricao(chamada.descricao);
        setStatusChamada(chamada.idStatus);
        setImagem(chamada.fotoUrl);
        setEditMode(true);
        setIdToEdit(chamada.idServico);
        setMaquinaChamada(chamada.equipamento);
        paginaCadOS();
    };

    // 3. ATUALIZAR ORDEM DE SERVIÇO
const putTask = async () => {
        try {
            const formData = new FormData();
            formData.append("Titulo", tituloChamada);
            formData.append("Lugar", local);
            formData.append("Descricao", descricao);
            formData.append("Equipamento", maquinaChamada || "");
            formData.append("IdStatus", statusChamada);
            formData.append("FotoUrl", imagem);

            await api.put(`/OrdemServico/${idToEdit}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            await getChamada();
            setIdToEdit(null);
            setEditMode(false);
            
            setTituloChamada("");
            setMaquinaChamada("");
            setLocal("");
            setDescricao("");
            setStatusChamada("");
            setImagem(null);
            paginaMinhasOS();
        } catch (error) {
            console.log("Erro ao atualizar OS:", error.response?.data || error.message);
        }
    };

    // 4. DELETAR ORDEM DE SERVIÇO
    const deleteTask = async (id) => {
        try {
            await api.delete(`/OrdemServico?id=${id}`);
            await getChamada();
        } catch (error) {
            Alert.alert("Erro", "Erro ao excluir ordem de serviço.");
            console.log("Erro ao deletar:", error.response?.data || error.message);
        }
    };

    return (
        <jussaContext.Provider value={{ 
            listagemChamadas, 
            setListagemChamadas, 
            descricao, 
            setDescricao, 
            local, 
            setLocal, 
            tituloChamada, 
            setTituloChamada,
            maquinaChamada, 
            setMaquinaChamada, 
            imagem,
            setImagem,
            editMode, 
            setEditMode, 
            idToEdit, 
            setIdToEdit, 
            getChamada,
            getNotificacao,
            listagemNotificacao,
            postChamada,
            putTask,
            deleteTask,
            paginaCadOS,
            editChamada,
            getIdChamada,
            chamadaUnica,
            statusChamada,
            setStatusChamada,
            paginaMinhasOS
        }}>
            {children}
        </jussaContext.Provider>
    );
};