using Microsoft.AspNetCore.Http; // Necessário para o IFormFile

namespace ChamaJussaAPI.DTO
{
    public class OrdemServicoCreateDTO
    {
        public string Titulo { get; set; }
        public string Lugar { get; set; }
        public string Descricao { get; set; }
        public string Equipamento { get; set; }
        public IFormFile FotoUrl { get; set; }
    }
}