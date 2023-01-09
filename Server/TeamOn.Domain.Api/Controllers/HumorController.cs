using Microsoft.AspNetCore.Mvc;
using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humor.Commands.Handlers;
using TeamOn.Domain.Humor.Commands.Inputs;

namespace TeamOn.Domain.Api.Controllers;

[ApiController]
[Route("/humor")]
public class WeatherForecastController : ControllerBase
{
    [HttpPost]
    public ICommandResult SendHumor(
        [FromBody] SendHumorCommand command,
        [FromServices] SendHumorHandler handler)
    {
        command.RefUser = "teste";
        
        return handler.Handle(command);
    }
}
