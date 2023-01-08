using TeamOn.Domain.Humor.Entities;

namespace TeamOn.Domain.Humor.Repositories
{
    public interface IHumorRepository
    {
         void SendTodaysHumor(HumorEntity humor, string refUser);
    }
}