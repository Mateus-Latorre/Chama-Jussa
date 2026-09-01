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

    public Usuario BuscarPorId(Guid id)
    {
        return _context.Usuarios.Find(id.ToString())!;
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
        catch (DbUpdateException ex)
        {
            var realErrorMessage = ex.InnerException?.Message ?? ex.Message;
            Console.WriteLine($"Database Error: {realErrorMessage}");

            throw; // Relança a exceção para a Controller capturar a falha
        }
    }
}