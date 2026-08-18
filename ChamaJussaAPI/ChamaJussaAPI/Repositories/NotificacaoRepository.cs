using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;

namespace ChamaJussaAPI.Repositories
{
    public class NotificacaoRepository : INotificacaoRepository
    {
        private readonly ChamaJussaContext _context;

        public NotificacaoRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public void Cadastrar(Notificacao novaNotificacao)
        {
            try
            {
                // Como definimos idNotificacao como IDENTITY(1,1) no banco, 
                // não precisamos gerar Guid. O banco cuida do ID sozinho!
                _context.Notificacoes.Add(novaNotificacao);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Notificacao> ListarPorUsuario(string idUsuario)
        {
            try
            {
                // Usamos o Where para trazer apenas as notificações daquele usuário
                List<Notificacao> listaNotificacoes = _context.Notificacoes
                    .Where(n => n.IdUsuario == idUsuario)
                    .ToList();

                return listaNotificacoes;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void MarcarComoLida(int idNotificacao)
        {
            try
            {
                Notificacao notificacaoBuscada = _context.Notificacoes.Find(idNotificacao)!;

                if (notificacaoBuscada != null)
                {
                    // Muda apenas o status de lida para true (1 no SQL)
                    notificacaoBuscada.Lida = true;

                    _context.Notificacoes.Update(notificacaoBuscada);
                    _context.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Notificacao BuscarPorId(int idNotificacao)
        {
            try
            {
                Notificacao notificacaoBuscada = _context.Notificacoes.Find(idNotificacao)!;
                return notificacaoBuscada;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}