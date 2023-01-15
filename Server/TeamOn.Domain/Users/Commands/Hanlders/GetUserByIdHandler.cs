using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Users.Commands.Inputs;
using TeamOn.Domain.Users.Repositories;

namespace TeamOn.Domain.Users.Commands.Hanlders
{
    public class GetUserByIdHandler : IHandler<GetUserByIdCommand>
    {
        IUserRepository _repository;

        public GetUserByIdHandler(IUserRepository repository) 
            => _repository = repository;

        public ICommandResult Handle(GetUserByIdCommand command)
        {
            if (command.Validate())
                return new GenericCommandResult(data: null,
                                                success: false,
                                                message: "Command não é válido.");

            try
            {
                var result = _repository.GetUserById(command.UserID, command.CompanyId);

                return new GenericCommandResult(data: result,
                                                success: true,
                                                message: "Usuário encontrado com sucesso.");

            }
            catch (System.Exception)
            {
                return new GenericCommandResult(data: null,
                                                success: false,
                                                message: "Não foi possível encontrar o usuário.");
            }
        }
    }
}