using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humours.Commands.Inputs;
using TeamOn.Domain.Humours.Entities;
using TeamOn.Domain.Humours.Repositories;

namespace TeamOn.Domain.Humours.Commands.Handlers
{
    public class SendHumourHandler : IHandler<SendHumourCommand>
    {
        IHumourRepository _repository;

        public SendHumourHandler(IHumourRepository repository)
            => _repository = repository;

        public ICommandResult Handle(SendHumourCommand command)
        {
            if (!command.Validate())
                return new GenericCommandResult(data: null, success: false, "Command Inválido.");

            try
            {
                var humour = new HumourEntity(command.HumourStatus, command.RefUser, command.Message);
                _repository.SendTodaysHumour(humour);

                return new GenericCommandResult(data: null, success: true, "Humor enviado.");
            }
            catch (System.Exception)
            {
                return new GenericCommandResult(data: null, success: false, "Não foi possível enviar seu humor.");
            }
        }
    }
}