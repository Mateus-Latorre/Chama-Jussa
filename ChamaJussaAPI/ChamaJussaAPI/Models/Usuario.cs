using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ChamaJussaAPI.Models;

public partial class Usuario
{
    public string IdUsuario { get; set; } = null!;

    public string Nome { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;
    [JsonIgnore]
    public virtual ICollection<Notificacao> Notificacaos { get; set; } = new List<Notificacao>();
    [JsonIgnore]
    public virtual ICollection<OrdemServico> OrdemServicos { get; set; } = new List<OrdemServico>();
}
