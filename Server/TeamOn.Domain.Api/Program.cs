using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humor.Commands.Handlers;
using TeamOn.Domain.Humor.Repositories;
using TeamOn.Domain.Infra.Contexts;
using TeamOn.Domain.Infra.Repositories.Humor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IHumorRepository,HumorRepository>();
builder.Services.AddTransient<SendHumorHandler, SendHumorHandler>();
builder.Services.AddTransient<GetHumorHandler, GetHumorHandler>();

// Descomment this line below and comment the line 21 to use supabase database
// builder.Services.AddDbContext<HumorContext>(options 
//     => options.UseNpgsql(builder.Configuration.GetConnectionString("supabase connection string")));

builder.Services.AddDbContext<HumorContext>(options => options.UseInMemoryDatabase("Database"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
