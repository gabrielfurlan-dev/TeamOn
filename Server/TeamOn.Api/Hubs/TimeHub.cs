using Microsoft.AspNetCore.SignalR;
namespace TeamOn.Api.Hubs
{
    public class TimeHub : Hub
    {
        public async Task SendTime()
        {
            while (true)
            {
                await Task.Delay(1000);
                Console.WriteLine($"Sending time to clients: {DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.fffZ")}");
                await Clients.All.SendAsync("ReceiveTime", DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.fffZ"));
            }
        }
    }
}