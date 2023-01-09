using TeamOn.Domain.Humor.Entities;

namespace TeamOn.Domain.Humor.Repositories
{
    public interface IHumorRepository
    {
        IEnumerable<HumorEntity> GetAllByUser(string refUser);
        void SendTodaysHumor(HumorEntity humor);
    }
}