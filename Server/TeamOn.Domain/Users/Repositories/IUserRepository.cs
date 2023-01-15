using TeamOn.Domain.Users.Enitities;

namespace TeamOn.Domain.Users.Repositories
{
    public interface IUserRepository
    {
        void Create(User user);
        List<User> GetAllUsers(string companyId);
        User GetUserById(string userId, string companyId);
    }
}