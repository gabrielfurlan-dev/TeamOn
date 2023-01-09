namespace TeamOn.Domain.Contracts.Commands
{
    public abstract class ICommandResult
    {
        public ICommandResult(object? data, bool success, string message)
        {
            Data = data;
            Success = success;
            Message = message;
        }

        public object? Data { get; private set; }
        public bool Success { get; private set; }
        public string Message { get; private set; }
    }
}