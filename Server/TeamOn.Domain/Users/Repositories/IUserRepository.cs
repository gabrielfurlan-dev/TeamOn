using TeamOn.Domain.Users.Enitities;

namespace TeamOn.Domain.Users.Repositories
{
    public interface IUserRepository
    {
        void Create(User user);
        List<User> GetAllUsersByCompany(string companyId);
        User GetUserByEmail(string userEmail, string companyId);
        User GetUserById(string userId, string companyId);
        void Update(string userId);
    }
}