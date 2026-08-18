using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StatusOrdemController : ControllerBase
{
    private readonly IStatusOrdemRepository _statusOrdemRepository;
    public StatusOrdemController(IStatusOrdemRepository statusOrdemRepository)
    {
        _statusOrdemRepository = statusOrdemRepository;
    }
    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            return Ok(_statusOrdemRepository.Listar());
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}
