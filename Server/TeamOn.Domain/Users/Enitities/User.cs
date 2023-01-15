namespace TeamOn.Domain.Users.Enitities
{
    public class User
    {
        public User(string name, string occupation, string biography, string email, List<string> skills)
        {
            Id = Guid.NewGuid().ToString();
            
            Name = name;
            Occupation = occupation;
            Biography = biography;
            Email = email;
            Skills = skills;
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string Biography { get; set; }
        public string Email { get; set; }
        public List<string> Skills { get; set; }
    }
}