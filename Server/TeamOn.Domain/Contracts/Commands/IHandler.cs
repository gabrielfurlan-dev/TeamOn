namespace TeamOn.Domain.Contracts.Commands
{
    public interface IHandler<T> where T : ICommandContract
    {
         ICommandResult Handle(T command);
    }
}