using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;

namespace TeamOn.Domain.Users.Commands.Inputs
{
    public class GetAllUsersCommand : ICommandContract
    {
        public string CompanyId { get; set; }

        public override bool Validate()
        {
           AddNotifications(
            new Contract<Notification>()
                .IsNullOrEmpty(CompanyId, "CompanyId", "O Id da companhia não foi informado."));

            return IsValid;
        }
    }
}