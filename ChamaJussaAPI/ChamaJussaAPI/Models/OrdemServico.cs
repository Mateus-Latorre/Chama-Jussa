using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Models;

public partial class OrdemServico
{
    public string IdServico { get; set; } = null!;

    public string Titulo { get; set; } = null!;

    public string? Equipamento { get; set; }

    public string Lugar { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public string? FotoUrl { get; set; }

    public DateTime? DataCriacao { get; set; }

    public string IdUsuario { get; set; } = null!;

    public string? IdStatus { get; set; }

    public virtual StatusOrdem? IdStatusNavigation { get; set; }

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
