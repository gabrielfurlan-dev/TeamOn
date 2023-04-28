using TeamOn.Domain.Users.Enitities;
using TeamOn.Domain.Users.Repositories;
using TeamOn.Infra.Contexts;

namespace TeamOn.Infra.Repositories.Users
{
    public class UserRepository : IUserRepository
    {

        private UserContext _dataContext;

        public UserRepository(UserContext dataContext)
            => _dataContext = dataContext;

        public void Create(User user)
        {
            _dataContext.Add(user);
            _dataContext.SaveChanges();
        }

        public List<User> GetAllUsersByCompany(string companyId)
            => _dataContext.Users.ToList();

        public User GetUserById(string userId, string companyId)
            => _dataContext.Users.First(x => x.Id == userId);

        public User GetUserByEmail(string userEmail, string companyId)
            => _dataContext.Users.First(x => x.Email == userEmail);

        public void Update(string userId)
        {
            throw new NotImplementedException();
        }
    }
}