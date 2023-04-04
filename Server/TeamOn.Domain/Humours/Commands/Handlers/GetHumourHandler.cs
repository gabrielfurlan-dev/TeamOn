using System.Windows.Input;
using TeamOn.Domain.Humours.Entities;
using TeamOn.Domain.Humours.Repositories;

namespace TeamOn.Domain.Humours.Commands.Handlers
{
    public class GetHumourHandler
    {
        private IHumourRepository _repository;

        public GetHumourHandler(IHumourRepository repository)
            => _repository = repository;

        public IEnumerable<HumourEntity> GetAllByUser(string refUser)
        {
            try
            {
                return _repository.GetAllByUser(refUser);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível obter as emoções de hoje. Erro: " + ex.Message);
            }
        }
    }
}