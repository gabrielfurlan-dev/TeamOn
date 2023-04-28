using System.ComponentModel.DataAnnotations;
using TeamOn.Domain.Contracts;

namespace TeamOn.Domain.Users.Enitities
{
    public class User : Entity
    {
        public User() => Skills = new List<string>();

        public User(string name, string occupation, string biography, string email, ICollection<string> skills)
        {
            Id = Guid.NewGuid().ToString();
            Name = name;
            Occupation = occupation;
            Biography = biography;
            Email = email;
            Skills = skills;
        }
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string Biography { get; set; }
        public string Email { get; set; }
        public ICollection<string> Skills { get; set; }
    }
}