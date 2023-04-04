using System.Text;
using System.Net;
using Microsoft.EntityFrameworkCore;
using System.Net.WebSockets;
using TeamOn.Domain.Humours.Repositories;
using TeamOn.Infra.Repositories.Humour;
using TeamOn.Domain.Humours.Commands.Handlers;
using TeamOn.Infra.Contexts;
using TeamOn.Api.Hubs;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IHumourRepository, HumourRepository>();
builder.Services.AddTransient<SendHumourHandler, SendHumourHandler>();
builder.Services.AddTransient<GetHumourHandler, GetHumourHandler>();
builder.Services.AddTransient<GetTodaysHumoursHandler, GetTodaysHumoursHandler>();

// builder.Services.AddDbContext<HumourContext>(options 
//     => options.UseNpgsql(builder.Configuration.GetConnectionString(System.Environment.GetEnvironmentVariable("SUPABASE_CONNECTION_STRING"))));

builder.Services.AddDbContext<HumourContext>(options => options.UseInMemoryDatabase("Database"));

builder.Services.AddCors(o => o.AddPolicy("MyPolicy",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000", "http://localhost:5184")
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                    }));

builder.Services.AddSignalR();

var app = builder.Build();

app.Use((context, next) =>
{
    context.Request.Scheme = "https";
    return next();
});

app.UseCors("MyPolicy");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHub<TimeHub>("/timehub");
    endpoints.MapHub<ChatHub>("/chathub");
    endpoints.MapHub<MeuHub>("/meu-hub");
});

app.Run();
