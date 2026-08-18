using ChamaJussaAPI.Models;

namespace ChamaJussaAPI.Interfaces
{
    public interface INotificacaoRepository
    {
        // Cria uma nova notificação (será chamado quando o status da ordem mudar)
        void Cadastrar(Notificacao novaNotificacao);

        // Lista apenas as notificações de um usuário específico
        List<Notificacao> ListarPorUsuario(string idUsuario);

        // Atualiza a notificação para lida = true
        void MarcarComoLida(int idNotificacao);

        // Busca uma notificação específica (útil para validações)
        Notificacao BuscarPorId(int idNotificacao);
    }
}