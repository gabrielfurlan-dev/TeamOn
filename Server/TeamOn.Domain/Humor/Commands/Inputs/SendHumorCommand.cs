using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humor.Enums;

namespace TeamOn.Domain.Humor.Commands.Inputs
{
    public class SendHumorCommand : ICommandContract
    {
        public EHumorStatus HumorStatus { get; private set; }
        public string RefUser { get; set; }

        public override bool Validate()
        {
            AddNotifications(
                new Contract<Notification>()
                    .Requires()
                    .IsNullOrEmpty(RefUser, "RefUser", "Informe um usuáio.")
            );

            return true;
        }
    }
}