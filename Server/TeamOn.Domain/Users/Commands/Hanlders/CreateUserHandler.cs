using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Users.Commands.Inputs;
using TeamOn.Domain.Users.Enitities;
using TeamOn.Domain.Users.Repositories;

namespace TeamOn.Domain.Users.Commands.Hanlders
{
    public class CreateUserHandler : IHandler<CreateUserCommand>
    {
        IUserRepository _repository;

        public CreateUserHandler(IUserRepository repository)
            => _repository = repository;

        public ICommandResult Handle(CreateUserCommand command)
        {
            if (!command.Validate())
                return new GenericCommandResult(null, false, $"Command não é válido. {command.Notifications.First().Message}");

            try
            {
                var user = new User(command.Name, command.Occupation, command.Biography, command.Email, command.Skills);

                _repository.Create(user);

                return new GenericCommandResult(null, true, "Usuário cadastrado com sucesso.");

            }
            catch (System.Exception ex)
            {
                return new GenericCommandResult(null, false, $"Não foi possível cadastrar o usuário.{Environment.NewLine}{ex.Message}");
            }
        }
    }
}