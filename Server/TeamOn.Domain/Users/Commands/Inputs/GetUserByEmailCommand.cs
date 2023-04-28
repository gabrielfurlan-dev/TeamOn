using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;

namespace TeamOn.Domain.Users.Commands.Inputs
{
    public class GetUserByEmailCommand : ICommandContract
    {
        public GetUserByEmailCommand(string userEmail, string companyId)
        {
            UserEmail = userEmail;
            CompanyId = companyId;
        }

        public string UserEmail { get; set; }
        public string CompanyId { get; set; }

        public override bool Validate()
        {
            AddNotifications(
            new Contract<Notification>()
                 .IsNotNullOrEmpty(UserEmail, "UserID", "O Email do usuário não foi informado.")
                 .IsNotNullOrEmpty(CompanyId, "CompanyId", "O Id da companhia não foi informado.")
            );

            return IsValid;
        }
    }
}