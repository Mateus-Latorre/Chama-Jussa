namespace ChamaJussaAPI.DTO
{
    public class UsuarioRetornoDTO
    {
        public string IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public IFormFile? FotoPerfil { get; set; }
    }
}