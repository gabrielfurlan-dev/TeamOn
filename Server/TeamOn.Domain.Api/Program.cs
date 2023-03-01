using System.Text;
using System.Net;
using Microsoft.EntityFrameworkCore;
using TeamOn.Domain.Humours.Commands.Handlers;
using TeamOn.Domain.Humours.Repositories;
using TeamOn.Domain.Infra.Contexts;
using TeamOn.Domain.Infra.Repositories.Humour;
using System.Net.WebSockets;

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
                        .AllowAnyHeader();
                    }));

var app = builder.Build();

app.UseWebSockets();

app.Map("/realtime-humours", requestDelegate: async context =>
{
    if(!context.WebSockets.IsWebSocketRequest)
        context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
    else
    {
        using var webSocket = context.WebSockets.AcceptWebSocketAsync();

        var data = Encoding.ASCII.GetBytes($".NET Rocks -> {DateTime.Now}");

        await webSocket.Result.SendAsync(data,
                                WebSocketMessageType.Text,
                                endOfMessage: true,
                                CancellationToken.None);
    }
});


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
// app.RunAsync();
