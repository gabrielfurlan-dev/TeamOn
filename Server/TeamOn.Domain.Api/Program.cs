using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humours.Commands.Handlers;
using TeamOn.Domain.Humours.Repositories;
using TeamOn.Domain.Infra.Contexts;
using TeamOn.Domain.Infra.Repositories.Humour;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IHumourRepository, HumourRepository>();
builder.Services.AddTransient<SendHumourHandler, SendHumourHandler>();
builder.Services.AddTransient<GetHumourHandler, GetHumourHandler>();

// builder.Services.AddDbContext<HumourContext>(options 
//     => options.UseNpgsql(builder.Configuration.GetConnectionString(System.Environment.GetEnvironmentVariable("SUPABASE_CONNECTION_STRING"))));

builder.Services.AddDbContext<HumourContext>(options => options.UseInMemoryDatabase("Database"));


builder.Services.AddCors(o => o.AddPolicy("MyPolicy",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000", "http://localhost:5184")
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                    }));

var app = builder.Build();

app.UseCors("MyPolicy");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
