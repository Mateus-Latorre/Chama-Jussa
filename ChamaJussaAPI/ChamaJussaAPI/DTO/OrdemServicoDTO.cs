namespace ChamaJussaAPI.DTO
{
    public class OrdemServicoDTO
    {
        public string? Titulo { get; set; }
        public string? Equipamento { get; set; }
        public string? Lugar { get; set; }
        public string? Descricao { get; set; }
        public IFormFile? FotoUrl { get; set; }
        public DateTime? DataCriacao { get; set; }
        public Guid IdUsuario { get; set; }
        public string IdStatus { get; set; }
    }
}
