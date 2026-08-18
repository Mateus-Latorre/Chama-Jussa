using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Models;

public partial class StatusOrdem
{
    public string IdStatus { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public virtual ICollection<OrdemServico> OrdemServicos { get; set; } = new List<OrdemServico>();
}
