using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;

namespace TeamOn.Domain.Users.Commands.Inputs
{
    public class GetUserByIdCommand : ICommandContract
    {
        public GetUserByIdCommand(string userId, string companyId)
        {
            UserId = userId;
            CompanyId = companyId;
        }

        public string UserId { get; set; }
        public string CompanyId { get; set; }

        public override bool Validate()
        {
            AddNotifications(
            new Contract<Notification>()
                 .IsNotNullOrEmpty(UserId, "UserID", "O Id do usuário não foi informado.")
                 .IsNotNullOrEmpty(CompanyId, "CompanyId", "O Id da companhia não foi informado.")
            );

            return IsValid;
        }
    }
}