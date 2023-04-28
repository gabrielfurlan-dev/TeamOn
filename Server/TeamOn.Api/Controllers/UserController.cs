using Microsoft.AspNetCore.Mvc;
using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Users.Commands.Hanlders;
using TeamOn.Domain.Users.Commands.Inputs;

namespace TeamOn.Api.Controllers
{
    [Microsoft.AspNetCore.Mvc.ApiController]
    [Route("/user")]
    public class UserController : ControllerBase
    {
        [Route("create")]
        [HttpPost]
        public ICommandResult SendHumour(
            [FromBody] CreateUserCommand command,
            [FromServices] CreateUserHandler handler
        ) => handler.Handle(command);

        [Route("get-all")]
        [HttpGet]
        public ICommandResult GetAllUsers(
            [FromBody] GetAllUsersByCompanyCommand command,
            [FromServices] GetAllUsersByCompanyHandler handler
        ) => handler.Handle(command);

        [Route("get-by-id")]
        [HttpGet]
        public ICommandResult GetUserById(
            [FromBody] GetUserByIdCommand command,
            [FromServices] GetUserByIdHandler handler
        ) => handler.Handle(command);
 
        [Route("get-by-email")]
        [HttpGet]
        public ICommandResult GetUserByEmail(
            [FromBody] GetUserByEmailCommand command,
            [FromServices] GetUserByEmailHandler handler
        ) => handler.Handle(command);
    }
}