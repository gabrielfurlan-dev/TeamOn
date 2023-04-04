using System.Windows.Input;
using Flunt.Notifications;
using Flunt.Validations;
using TeamOn.Domain.Contracts.Commands;

namespace TeamOn.Domain.Users.Commands.Inputs
{
    public class CreateUserCommand : ICommandContract
    {
        public CreateUserCommand(string name, string occupation, string biography, string email, List<string> skills)
        {
            Name = name;
            Occupation = occupation;
            Biography = biography;
            Email = email;
            Skills = skills;
        }

        public string Name { get; set; }
        public string Occupation { get; set; }
        public string Biography { get; set; }
        public string Email { get; set; }
        public List<string> Skills { get; set; }

        public override bool Validate()
        {
            AddNotifications(
                new Contract<Notification>()
                .IsNullOrEmpty(Name, "Name", "Preencha o nome."));

            return IsValid;
        }
    }
}