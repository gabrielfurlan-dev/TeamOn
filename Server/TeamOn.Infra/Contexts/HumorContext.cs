using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humours.Entities;

namespace TeamOn.Infra.Contexts
{
    public class HumourContext : DbContext
    {
        public HumourContext() { }
        public HumourContext(DbContextOptions<HumourContext> options) : base(options) { }

        public DbSet<HumourEntity> Humours { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder options)
        //     => options.UseNpgsql(System.Environment.GetEnvironmentVariable("SUPABASE_CONNECTION_STRING"));
    }
}