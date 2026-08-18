using ChamaJussaAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificacaoController : ControllerBase
    {
        private readonly INotificacaoRepository _notificacaoRepository;

        public NotificacaoController(INotificacaoRepository notificacaoRepository)
        {
            _notificacaoRepository = notificacaoRepository;
        }

        [HttpGet("{idUsuario}")]
        public IActionResult GetPorUsuario(string idUsuario)
        {
            try
            {
                return Ok(_notificacaoRepository.ListarPorUsuario(idUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("marcar-lida/{idNotificacao}")]
        public IActionResult MarcarComoLida(int idNotificacao)
        {
            try
            {
                var notificacaoBuscada = _notificacaoRepository.BuscarPorId(idNotificacao);
                if (notificacaoBuscada == null)
                    return NotFound("Notificação não encontrada.");

                _notificacaoRepository.MarcarComoLida(idNotificacao);

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}