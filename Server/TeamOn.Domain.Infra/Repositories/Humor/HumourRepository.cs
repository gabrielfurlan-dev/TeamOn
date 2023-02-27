using TeamOn.Domain.Humours.Entities;
using TeamOn.Domain.Humours.Repositories;
using TeamOn.Domain.Infra.Contexts;

namespace TeamOn.Domain.Infra.Repositories.Humour
{
    public class HumourRepository : IHumourRepository
    {
        private HumourContext _dataContext;

        public HumourRepository(HumourContext dataContext)
            => _dataContext = dataContext;

        public IEnumerable<HumourEntity> GetAllByUser(string refUser)
            => _dataContext.Humours.Where(x => x.RefUser == refUser).OrderBy(x => x.SendDate);

        public IEnumerable<HumourEntity> GetTodaysHumourByCompany(string refCompany)
            => _dataContext.Humours
                .Where(x => x.RefCompany == refCompany)
                .Where(x => x.SendDate.Year == DateTime.Now.Year)
                .OrderBy(x => x.SendDate);

        public void SendTodaysHumour(HumourEntity humour)
        {
            _dataContext.Add(humour);
            _dataContext.SaveChanges();
        }
    }
}