using TeamOn.Domain.Humours.Entities;

namespace TeamOn.Domain.Humours.Repositories
{
    public interface IHumourRepository
    {
        IEnumerable<HumourEntity> GetAllByUser(string refUser);
        void SendTodaysHumour(HumourEntity humour);
    }
}