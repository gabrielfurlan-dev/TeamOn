using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humor.Commands.Handlers;
using TeamOn.Domain.Humor.Repositories;
using TeamOn.Domain.Infra.Contexts;
using TeamOn.Domain.Infra.Repositories.Humor;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IHumorRepository,HumorRepository>();
builder.Services.AddTransient<SendHumorHandler, SendHumorHandler>();
builder.Services.AddTransient<GetHumorHandler, GetHumorHandler>();

// builder.Services.AddDbContext<HumorContext>(options 
//     => options.UseNpgsql(builder.Configuration.GetConnectionString(System.Environment.GetEnvironmentVariable("SUPABASE_CONNECTION_STRING"))));

builder.Services.AddDbContext<HumorContext>(options => options.UseInMemoryDatabase("Database"));

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
