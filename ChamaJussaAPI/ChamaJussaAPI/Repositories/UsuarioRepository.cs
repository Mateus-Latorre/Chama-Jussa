using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using ChamaJussaAPI.Utils;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Repositories;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly ChamaJussaContext _context;
    public UsuarioRepository(ChamaJussaContext context)
    {
        _context = context;
    }
    public Usuario BuscarPorEmaileSenha(string email, string senha)
    {
        try
        {
            Usuario usuarioBuscado = _context.Usuarios.FirstOrDefault(u => u.Email == email)!;
            if (usuarioBuscado != null)
            {
                bool confere = Criptografia.CompararHash(senha, usuarioBuscado.Senha!);
                if (confere)
                {
                    return usuarioBuscado;
                }
            }

            return null!;
        }
        catch (Exception)
        {

            throw;
        }
    }

    public Usuario BuscarPorId(Guid id)
    {
        try
        {
            Usuario usuarioBuscado = _context.Usuarios.Find(id.ToString())!;
            if (usuarioBuscado != null)
            {
                return usuarioBuscado;
            }
            return null!;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public void Cadastrar(Usuario novoUsuario)
    {
        try
        {
            novoUsuario.IdUsuario = Guid.NewGuid().ToString();
            novoUsuario.Senha = Criptografia.GerarHash(novoUsuario.Senha)!;
            _context.Usuarios.Add(novoUsuario);
            _context.SaveChanges();
        }
        catch (Exception)
        {
            throw;
        }
    }

}
