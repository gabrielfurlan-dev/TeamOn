using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humor.Entities;

namespace TeamOn.Domain.Infra.Contexts
{
    public class HumorContext : DbContext
    {
        public HumorContext() 
        {
            
         }
        public HumorContext(DbContextOptions<HumorContext> options) : base(options) { }

        public DbSet<HumorEntity> Humors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseNpgsql("");
        }

    }
}