using ChamaJussaAPI.Models;
namespace ChamaJussaAPI.Interfaces;

public interface IOrdemServicoRepository
{
    void Cadastrar(OrdemServico novaOrdem);
    void AtualizarIdCorpo(OrdemServico ordemAtualizada);
    void AtualizarIdUrl(Guid id, OrdemServico ordemAtualizada);
    List<OrdemServico> Listar();
    void Deletar(Guid id);
    OrdemServico BuscarPorId(Guid id);

}
