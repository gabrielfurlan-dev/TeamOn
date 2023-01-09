namespace TeamOn.Domain.Contracts.Commands
{
    public class GenericCommandResult : ICommandResult
    {
        public GenericCommandResult(object? data,
                                    bool success,
                                    string message) : base(data, success, message) { }
    }
}