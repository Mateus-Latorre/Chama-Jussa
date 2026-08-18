using ChamaJussaAPI.Models;

namespace ChamaJussaAPI.Interfaces;

public interface IUsuarioRepository
{
    void Cadastrar(Usuario novoUsuario);

    Usuario BuscarPorId(Guid id);

    Usuario BuscarPorEmaileSenha(string email, string senha);

}
