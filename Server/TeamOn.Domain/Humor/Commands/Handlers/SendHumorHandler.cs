using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humor.Commands.Inputs;
using TeamOn.Domain.Humor.Repositories;

namespace TeamOn.Domain.Humor.Commands.Handlers
{
    public class SendHumorHandler : IHandler<SendHumorCommand>
    {
        IHumorRepository _repository;

        public SendHumorHandler(IHumorRepository repository)
            => _repository = repository;

        public ICommandResult Handle(SendHumorCommand command)
        {
            if (!command.Validate())
                return new GenericCommandResult(null, false, "Command Inválido.");

            try
            {
                _repository.SendTodaysHumor(command.Humor, command.UserRef);

                return new GenericCommandResult(null, true, "Humor enviado.");
            }
            catch (System.Exception)
            {
                return new GenericCommandResult(null, false, "Não foi possível enviar seu humor.");
            }
        }
    }
}