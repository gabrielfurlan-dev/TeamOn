using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Users.Commands.Inputs;
using TeamOn.Domain.Users.Repositories;

namespace TeamOn.Domain.Users.Commands.Hanlders
{
    public class GetAllUsersHandler : IHandler<GetAllUsersCommand>
    {
        IUserRepository _repository;

        public GetAllUsersHandler(IUserRepository repository)
            => _repository = repository;

        public ICommandResult Handle(GetAllUsersCommand command)
        {
            if (!command.Validate())
                return new GenericCommandResult(null, false, "Command não é válido.");

            try
            {
                var result = _repository.GetAllUsers(command.CompanyId);

                return new GenericCommandResult(result, true, "Usuários encontrados com sucesso.");

            }
            catch (System.Exception)
            {
                return new GenericCommandResult(null, false, "Não foi possível encontrar o(s) usuário(s).");
            }
        }
    }
}