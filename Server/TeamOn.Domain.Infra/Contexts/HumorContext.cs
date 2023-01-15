using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humors.Entities;

namespace TeamOn.Domain.Infra.Contexts
{
    public class HumorContext : DbContext
    {
        public HumorContext() { }
        public HumorContext(DbContextOptions<HumorContext> options) : base(options) { }

        public DbSet<HumorEntity> Humors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseNpgsql(System.Environment.GetEnvironmentVariable ("SUPABASE_CONNECTION_STRING"));
    }
}