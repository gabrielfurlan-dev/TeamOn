using System.Windows.Input;
using TeamOn.Domain.Humours.Entities;
using TeamOn.Domain.Humours.Repositories;

namespace TeamOn.Domain.Humours.Commands.Handlers
{
    public class GetTodaysHumoursHandler
    {
        private IHumourRepository _repository;

        public GetTodaysHumoursHandler(IHumourRepository repository)
            => _repository = repository;

        public IEnumerable<HumourEntity> GetTodaysHumoursByCompany(string refCompany)
        {
            try
            {
                return _repository.GetTodaysHumourByCompany(refCompany);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível obter as emoções de hoje. Erro: " + ex.Message);
            }
        }
    }
}