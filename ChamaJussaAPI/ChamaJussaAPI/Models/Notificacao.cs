using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Models;

public partial class Notificacao
{
    public int IdNotificacao { get; set; }

    public string IdUsuario { get; set; } = null!;

    public string Mensagem { get; set; } = null!;

    public bool? Lida { get; set; }

    public DateTime? DataCriacao { get; set; }

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
