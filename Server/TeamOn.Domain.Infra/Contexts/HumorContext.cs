using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humor.Entities;

namespace TeamOn.Domain.Infra.Contexts
{
    public class HumorContext : DbContext
    {
        public HumorContext(DbContextOptions<HumorContext> options) : base(options) {  }
        
        public DbSet<HumorEntity> Humor { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HumorEntity>().Property(x => x.HumorStatus).HasColumnType("integer");
        }
    }
}