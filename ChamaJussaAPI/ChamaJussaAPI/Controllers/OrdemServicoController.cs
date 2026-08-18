using ChamaJussaAPI.DTO;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using ChamaJussaAPI.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class OrdemServicoController : ControllerBase
{
    private readonly IOrdemServicoRepository _ordemServicoRepository;
    private readonly INotificacaoRepository _notificacaoRepository;
    public OrdemServicoController(IOrdemServicoRepository ordemServicoRepository, INotificacaoRepository notificacaoRepository)
    {
        _ordemServicoRepository = ordemServicoRepository;
        _notificacaoRepository = notificacaoRepository; // Atribuído aqui!
    }
    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            return Ok(_ordemServicoRepository.BuscarPorId(id));
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            return Ok(_ordemServicoRepository.Listar());
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
    [HttpPost]
    public async Task<IActionResult> Post([FromForm] OrdemServicoDTO ordemServico)
    {
        if (String.IsNullOrWhiteSpace(ordemServico.Titulo))
            return BadRequest("É obrigatório que a Ordem de Serviço tenha um titúlo");
        if (String.IsNullOrWhiteSpace(ordemServico.Lugar))
            return BadRequest("É obrigatório que a Ordem de Serviço tenha um Lugar");
        if (String.IsNullOrWhiteSpace(ordemServico.Descricao))
            return BadRequest("É obrigatório que a Ordem de Serviço tenha uma descrição");

        OrdemServico novaOrdem = new OrdemServico();

        if (ordemServico.FotoUrl != null && ordemServico.FotoUrl.Length > 0)
        {
            var extensao = Path.GetExtension(ordemServico.FotoUrl.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            //Garante que a pasta exista
            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await ordemServico.FotoUrl.CopyToAsync(stream);
            }
            novaOrdem.FotoUrl = nomeArquivo;
        }

        novaOrdem.IdStatus = ordemServico.IdStatus.ToString();
        novaOrdem.Titulo = ordemServico.Titulo;
        novaOrdem.Lugar = ordemServico.Lugar;
        novaOrdem.Descricao = ordemServico.Descricao;
        novaOrdem.DataCriacao = ordemServico.DataCriacao;
        novaOrdem.Equipamento = ordemServico.Equipamento;
        novaOrdem.IdUsuario = ordemServico.IdUsuario.ToString();

        try
        {
            _ordemServicoRepository.Cadastrar(novaOrdem);
            return StatusCode(201);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, OrdemServicoDTO ordemAtualizada)
    {
        var ordemBuscada = _ordemServicoRepository.BuscarPorId(id);
        if (ordemBuscada == null)
            return NotFound("Ordem de Serviço não encontrada");

        if (!String.IsNullOrWhiteSpace(ordemAtualizada.Titulo))
            ordemBuscada.Titulo = ordemAtualizada.Titulo;


        if (!String.IsNullOrWhiteSpace(ordemAtualizada.Lugar))
            ordemBuscada.Lugar = ordemAtualizada.Lugar;

        if (!String.IsNullOrWhiteSpace(ordemAtualizada.Equipamento))
            ordemBuscada.Equipamento = ordemAtualizada.Equipamento;

        if (!String.IsNullOrWhiteSpace(ordemAtualizada.Descricao))
            ordemBuscada.Descricao = ordemAtualizada.Descricao;

        if (ordemAtualizada.IdStatus != null && ordemBuscada.IdStatus != ordemAtualizada.IdStatus.ToString())
        {
            ordemBuscada.IdStatus = ordemAtualizada.IdStatus.ToString();

            Notificacao novaNotificacao = new Notificacao
            {
                IdUsuario = ordemBuscada.IdUsuario, // Envia para o dono da Ordem
                Mensagem = $"Sua solicitação '{ordemBuscada.Titulo}' foi atualizada para o status: {ordemBuscada.IdStatus}.",
                DataCriacao = DateTime.Now,
                Lida = false
            };

            _notificacaoRepository.Cadastrar(novaNotificacao);
        }

        if(ordemAtualizada.FotoUrl != null && ordemAtualizada.FotoUrl.Length > 0)
        {
            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            if (!String.IsNullOrEmpty(ordemBuscada.FotoUrl))
            {
                var caminhoAntigo = Path.Combine(caminhoPasta, ordemBuscada.FotoUrl);
                if (System.IO.File.Exists(caminhoAntigo))
                    System.IO.File.Delete(caminhoAntigo);
            }

            var extensao = Path.GetExtension(ordemAtualizada.FotoUrl.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await ordemAtualizada.FotoUrl.CopyToAsync(stream);
            }
            ordemBuscada.FotoUrl = nomeArquivo;
        }

        try
        {
            _ordemServicoRepository.AtualizarIdUrl(id, ordemBuscada);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    [HttpPut]
    public IActionResult Put(OrdemServico ordemAtualizada)
    {
        try
        {
            _ordemServicoRepository.AtualizarIdCorpo(ordemAtualizada);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    [HttpDelete]
    public IActionResult Delete(Guid id)
    {
        var ordemBuscada = _ordemServicoRepository.BuscarPorId(id);
        if (ordemBuscada == null)
            return NotFound("Ordem de Serviço não encontrada");
        var pastaRelativa = "wwwroot/imagens";
        var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

        if (!String.IsNullOrEmpty(ordemBuscada.FotoUrl))
        {
            var caminho = Path.Combine(caminhoPasta, ordemBuscada.FotoUrl);
            if (System.IO.File.Exists(caminho))
                System.IO.File.Delete(caminho);
        }
        try
        {
            _ordemServicoRepository.Deletar(id);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}