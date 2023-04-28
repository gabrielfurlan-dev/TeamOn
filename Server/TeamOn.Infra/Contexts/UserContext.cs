using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Users.Enitities;
using TeamOn.Infra.Contexts.Mappings;

namespace TeamOn.Infra.Contexts
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserMapping());
        }
    }
}