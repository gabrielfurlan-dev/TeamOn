using Microsoft.EntityFrameworkCore;
using TeamOn.Api.Hubs;
using TeamOn.Api.IoC;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();
builder.Services.AddTransients();
builder.Services.AddScopeds();

// builder.Services.AddDbContexts(options =>
// {
//     options.UseNpgsql(builder.Configuration.GetConnectionString(name: System.Environment.GetEnvironmentVariable("SUPABASE_CONNECTION_STRING")));
// });
builder.Services.AddDbContexts(options => options.UseInMemoryDatabase("Database"));

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
