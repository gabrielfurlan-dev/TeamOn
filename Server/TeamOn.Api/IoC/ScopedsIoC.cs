using TeamOn.Domain.Humours.Repositories;
using TeamOn.Domain.Users.Repositories;
using TeamOn.Infra.Repositories.Humour;
using TeamOn.Infra.Repositories.Users;

namespace TeamOn.Api.IoC
{
    public static class ScopedsIoC
    {
        public static void AddScopeds(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IHumourRepository, HumourRepository>();
        }
    }
}