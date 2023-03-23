using Microsoft.AspNetCore.SignalR;

namespace TeamOn.Api.Hubs
{
    public class MeuHub : Hub
    {
        public async Task EnviarMensagem(string mensagem)
        {
            await Clients.All.SendAsync("ReceberMensagem", mensagem);
        }
    }
}

