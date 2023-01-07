using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humor.Entities;

namespace TeamOn.Domain.Humor.Repositories
{
    public interface IHumorRepository
    {
         ICommandResult SendTodaysHumor(HumorEntity humor, string refUser);
    }
}