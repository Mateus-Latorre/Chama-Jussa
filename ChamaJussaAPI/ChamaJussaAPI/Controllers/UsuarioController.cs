using ChamaJussaAPI.DTO;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;

    public UsuarioController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            return Ok(_usuarioRepository.BuscarPorId(id));
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPost]
    public IActionResult Post([FromForm] UsuarioDTO dto)
    {
        try
        {
            string? caminhoFoto = null;

            if (dto.FotoPerfil != null && dto.FotoPerfil.Length > 0)
            {
                // Gera um nome único para o arquivo não sobrescrever outro existente
                var extensao = Path.GetExtension(dto.FotoPerfil.FileName);
                var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

                // Caminho da pasta wwwroot/uploads no seu servidor
                var pastaUploads = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                if (!Directory.Exists(pastaUploads))
                {
                    Directory.CreateDirectory(pastaUploads);
                }

                var caminhoAbsoluto = Path.Combine(pastaUploads, nomeArquivo);

                // Copia o arquivo do celular para dentro da pasta na API
                using (var stream = new FileStream(caminhoAbsoluto, FileMode.Create))
                {
                    dto.FotoPerfil.CopyTo(stream);
                }

                // Caminho relativo salvo no banco
                caminhoFoto = $"/uploads/{nomeArquivo}";
            }

            // Instancia o modelo e grava no banco
            var novoUsuario = new Usuario
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Senha = dto.Senha,
                FotoPerfil = caminhoFoto
            };

            _usuarioRepository.Cadastrar(novoUsuario);

            return StatusCode(201, novoUsuario);
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}
