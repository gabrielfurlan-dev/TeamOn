using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;

namespace TeamOn.Domain.Users.Commands.Inputs
{
    public class GetUserByIdCommand : ICommandContract
    {
        public string UserID { get; set; }
        public string CompanyId { get; set; }

        public override bool Validate()
        {
            AddNotifications(
           new Contract<Notification>()
                .IsNullOrEmpty(UserID, "UserID", "O Id do usuário não foi informado.")
                .IsNullOrEmpty(CompanyId, "CompanyId", "O Id da companhia não foi informado.")
           );

            return IsValid;
        }
    }
}