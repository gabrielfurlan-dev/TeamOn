using TeamOn.Domain.Humours.Commands.Handlers;
using TeamOn.Domain.Users.Commands.Hanlders;

namespace TeamOn.Api.IoC
{
    public static class TransientsIoC
    {
        public static void AddTransients(this IServiceCollection services)
        {
            services.AddUserTransients();
            services.AddHumourTransients();
        }

        private static void AddUserTransients(this IServiceCollection services)
        {
            services.AddTransient<CreateUserHandler, CreateUserHandler>();
            services.AddTransient<GetAllUsersByCompanyHandler, GetAllUsersByCompanyHandler>();
            services.AddTransient<GetUserByIdHandler, GetUserByIdHandler>();
            services.AddTransient<GetUserByEmailHandler, GetUserByEmailHandler>();
        }

        private static void AddHumourTransients(this IServiceCollection services)
        {
            services.AddTransient<SendHumourHandler, SendHumourHandler>();
            services.AddTransient<GetHumourHandler, GetHumourHandler>();
            services.AddTransient<GetTodaysHumoursHandler, GetTodaysHumoursHandler>();
        }
    }
}