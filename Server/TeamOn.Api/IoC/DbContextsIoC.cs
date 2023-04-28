using Microsoft.EntityFrameworkCore;
using TeamOn.Infra.Contexts;

namespace TeamOn.Api.IoC
{
    public static class DbContextsIoC
    {
        public static void AddDbContexts(this IServiceCollection services, Action<DbContextOptionsBuilder>? connection)
        {
            services.AddDbContext<HumourContext>(connection);
            services.AddDbContext<UserContext>(connection);
        }
    }
}