namespace TeamOn.Domain.Contracts.Commands
{
    public class GenericCommandResult : ICommandResult
    {
        public GenericCommandResult(object data, bool success, string message)
        {
            Data = data;
            Success = success;
            Message = message;
        }

        public object Data { get; private set; }
        public bool Success { get; private set; }
        public string Message { get; private set; }
    }
}