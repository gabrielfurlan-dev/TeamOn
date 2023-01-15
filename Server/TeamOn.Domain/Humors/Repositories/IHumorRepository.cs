using TeamOn.Domain.Humors.Entities;

namespace TeamOn.Domain.Humors.Repositories
{
    public interface IHumorRepository
    {
        IEnumerable<HumorEntity> GetAllByUser(string refUser);
        void SendTodaysHumor(HumorEntity humor);
    }
}