using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humor.Entities;

namespace TeamOn.Domain.Humor.Commands.Inputs
{
    public class SendHumorCommand : ICommandContract
    {
        public HumorEntity Humor { get; set; }
        public string? UserRef { get; private set; }
        public DateTime DateSent { get; private set; }

        public override bool Validate()
        {
            AddNotifications(
                new Contract<Notification>()
                    .Requires()
                    .IsNullOrEmpty(UserRef, "UserRef", "Informe um usuáio.")
                    .IsFalse(DateSent.Date == DateTime.Now.Date, "DateSent", "Data inválida.")
            );

            return IsValid;
        }
    }
}