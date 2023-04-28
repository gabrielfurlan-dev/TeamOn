using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Users.Commands.Inputs;
using TeamOn.Domain.Users.Repositories;

namespace TeamOn.Domain.Users.Commands.Hanlders
{
    public class GetUserByEmailHandler : IHandler<GetUserByEmailCommand>
    {
        readonly IUserRepository _repository;
        public GetUserByEmailHandler(IUserRepository repository)
            => _repository = repository;

        public ICommandResult Handle(GetUserByEmailCommand command)
        {
            if (!command.Validate())
                return new GenericCommandResult(data: null,
                                                success: false,
                                                message: $"Command não é válido.  {Environment.NewLine}Erro: {command.Notifications.First().Message}");

            try
            {
                var result = _repository.GetUserByEmail(command.UserEmail, command.CompanyId);

                return new GenericCommandResult(data: result,
                                                success: true,
                                                message: "Usuário encontrado com sucesso.");

            }
            catch (System.Exception ex)
            {
                return new GenericCommandResult(data: null,
                                                success: false,
                                                message: $"Não foi possível encontrar o usuário. {Environment.NewLine}Erro: {ex.Message}");
            }
        }
    }
}