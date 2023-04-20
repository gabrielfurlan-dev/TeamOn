using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Store.Entities;

namespace TeamOn.Infra.Contexts
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options) { }
        public DbSet<StoreEntity> Store { get; set; }
    }
}