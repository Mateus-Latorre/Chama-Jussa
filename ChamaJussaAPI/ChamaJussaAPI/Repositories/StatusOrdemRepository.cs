using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;

namespace ChamaJussaAPI.Repositories;

public class StatusOrdemRepository : IStatusOrdemRepository
{
	private readonly ChamaJussaContext _context;
	public StatusOrdemRepository(ChamaJussaContext context)
	{
		_context = context;
	}
    public List<StatusOrdem> Listar()
    {
		try
		{
			List<StatusOrdem> listaStatus = _context.StatusOrdems.ToList();
			return listaStatus;
		}
		catch (Exception)
		{

			throw;
		}
    }
}


