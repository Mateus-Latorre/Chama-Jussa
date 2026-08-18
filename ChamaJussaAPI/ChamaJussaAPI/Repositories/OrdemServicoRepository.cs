using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using static System.Net.WebRequestMethods;

namespace ChamaJussaAPI.Repositories;

public class OrdemServicoRepository : IOrdemServicoRepository
{
    private readonly ChamaJussaContext _context;

    public OrdemServicoRepository(ChamaJussaContext context)
    {
        _context = context;
    }

    public void AtualizarIdCorpo(OrdemServico ordemAtualizada)
    {
        try
        {
            OrdemServico ordemBuscada = _context.OrdemServicos.Find(ordemAtualizada.IdServico)!;
            if (ordemBuscada != null)
            {
                ordemBuscada.Titulo = ordemAtualizada.Titulo;
                ordemBuscada.Descricao = ordemAtualizada.Descricao;
                ordemBuscada.Lugar = ordemBuscada.Lugar;
                ordemBuscada.Equipamento = ordemBuscada.Equipamento;
                ordemBuscada.FotoUrl = ordemBuscada.FotoUrl;
                ordemBuscada.IdStatus = ordemBuscada.IdStatus;
            }
            _context.OrdemServicos.Update(ordemBuscada!);
            _context.SaveChanges();
        }
        catch
        {
            throw;
        }
    }

    public void AtualizarIdUrl(Guid id, OrdemServico ordemAtualizada)
    {
        try
        {
            OrdemServico ordemBuscada = _context.OrdemServicos.Find(id.ToString())!;
            if (ordemBuscada != null)
            {
                ordemBuscada.Titulo = ordemAtualizada.Titulo;
                ordemBuscada.Descricao = ordemAtualizada.Descricao;
                ordemBuscada.Lugar = ordemBuscada.Lugar;
                ordemBuscada.Equipamento = ordemBuscada.Equipamento;
                ordemBuscada.FotoUrl = ordemBuscada.FotoUrl;
                ordemBuscada.IdStatus = ordemBuscada.IdStatus;
            }
            _context.OrdemServicos.Update(ordemBuscada!);
            _context.SaveChanges();
        }
        catch
        {
            throw;
        }
    }

    public OrdemServico BuscarPorId(Guid id)
    {
        try
        {
            OrdemServico ordemBuscada = _context.OrdemServicos.Find
                (id.ToString())!;
            return ordemBuscada;
        }
        catch (Exception)
        {

            throw;
        }
    }

    public void Cadastrar(OrdemServico novaOrdem)
    {
        try
        {
            novaOrdem.IdServico = Guid.NewGuid().ToString();
            _context.OrdemServicos.Add(novaOrdem);
            _context.SaveChanges();
        }
        catch (Exception)
        {

            throw;
        }
    }

    public void Deletar(Guid id)
    {
        try
        {
            OrdemServico ordemBuscada = _context.OrdemServicos.Find(id.ToString())!;
            if(ordemBuscada != null)
            {
                _context.Remove(ordemBuscada);
            }
            _context.SaveChanges();
        }
        catch (Exception)
        {

            throw;
        }
    }

    public List<OrdemServico> Listar()
    {
        try
        {
            List<OrdemServico> listaOrdens = _context.OrdemServicos.ToList();
            return listaOrdens;
        }
        catch (Exception)
        {

            throw;
        }
    }
}
