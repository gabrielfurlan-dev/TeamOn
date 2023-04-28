using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Users.Commands.Inputs;
using TeamOn.Domain.Users.Repositories;

namespace TeamOn.Domain.Users.Commands.Hanlders
{
    public class GetAllUsersByCompanyHandler : IHandler<GetAllUsersByCompanyCommand>
    {
        IUserRepository _repository;

        public GetAllUsersByCompanyHandler(IUserRepository repository)
            => _repository = repository;

        public ICommandResult Handle(GetAllUsersByCompanyCommand command)
        {
            if (!command.Validate())
                return new GenericCommandResult(null, false, $"Command não é válido. {command.Notifications.First().Message}");

            try
            {
                var result = _repository.GetAllUsersByCompany(command.CompanyId);

                return new GenericCommandResult(result, true, "Usuários encontrados com sucesso.");
            }
            catch (System.Exception)
            {
                return new GenericCommandResult(null, false, "Não foi possível encontrar o(s) usuário(s).");
            }
        }
    }
}