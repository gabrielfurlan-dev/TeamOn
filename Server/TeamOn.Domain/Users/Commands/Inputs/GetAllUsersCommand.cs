using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;

namespace TeamOn.Domain.Users.Commands.Inputs
{
    public class GetAllUsersByCompanyCommand : ICommandContract
    {
        public GetAllUsersByCompanyCommand(string companyId)
            => CompanyId = companyId;

        public string CompanyId { get; set; }

        public override bool Validate()
        {
            AddNotifications(
             new Contract<Notification>()
                 .Requires()
                 .IsNotNullOrEmpty(CompanyId, "CompanyId", "O Id da companhia não foi informado."));

            return IsValid;
        }
    }
}