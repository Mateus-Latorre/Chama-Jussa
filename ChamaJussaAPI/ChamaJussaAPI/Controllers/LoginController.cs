using ChamaJussaAPI.DTO;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ChamaJussaAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;
    public LoginController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }
    [HttpPost]
    public IActionResult Login(LoginDTO loginDto)
    {
        try
        {
            Usuario usuarioBuscado = _usuarioRepository.BuscarPorEmaileSenha(loginDto.Email!, loginDto.Senha!);
            if (usuarioBuscado == null)
            {
                return NotFound("Email ou senha inválidos.");
            }
            //Caso encontre o usuário, prossegue para a criação do token
            //1. Definir as informações(Claims) que serão fornecidas no token (payload)
            var claims = new[]
            {
    // 1. Claim padrão do .NET para identificar o Usuário (Resolve o 401 na OrdemServicoController)
    new Claim(ClaimTypes.NameIdentifier, usuarioBuscado.IdUsuario.ToString()),

    // 2. ID Único do próprio Token (Boa prática JWT)
    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),

    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email!),
    new Claim("nome", usuarioBuscado.Nome!),
    new Claim("fotoPerfil", usuarioBuscado.FotoPerfil ?? "")
};

            //2. Definir a chave de acesso ao token
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("chamaJussa-chave-autenticacao-webapi-dev"));

            //3. Definir as credenciais do token(Header)
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //4. Gerar o token
            var token = new JwtSecurityToken(
                //emissor do token
                issuer: "api_chamaJussa",
                //destinatário do token
                audience: "api_chamaJussa",
                //dados definidos nas claims(informações)
                claims: claims,
                //tempo de expiração do token
                expires: DateTime.Now.AddMinutes(5),
                //credenciais do token
                signingCredentials: creds
            );
            //5. Retornar o token criado
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}

