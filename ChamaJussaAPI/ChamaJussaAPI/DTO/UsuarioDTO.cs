namespace ChamaJussaAPI.DTO
{
    public class UsuarioDTO
    {
        public string IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public IFormFile? FotoPerfil { get; set; }
    }
}