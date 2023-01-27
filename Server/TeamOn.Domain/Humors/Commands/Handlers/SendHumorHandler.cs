using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humors.Commands.Inputs;
using TeamOn.Domain.Humors.Entities;
using TeamOn.Domain.Humors.Repositories;

namespace TeamOn.Domain.Humors.Commands.Handlers
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
                // var humor = new HumorEntity(command.HumorStatus, command.RefUser, command.Message);
                var humor = new HumorEntity(Enums.EHumorStatus.Emotionless, "teste", "teste");
                _repository.SendTodaysHumor(humor);

                return new GenericCommandResult(null, true, "Humor enviado.");
            }
            catch (System.Exception)
            {
                return new GenericCommandResult(null, false, "Não foi possível enviar seu humor.");
            }
        }
    }
}