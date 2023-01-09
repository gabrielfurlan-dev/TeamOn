using System.Windows.Input;
using TeamOn.Domain.Humor.Entities;
using TeamOn.Domain.Humor.Repositories;

namespace TeamOn.Domain.Humor.Commands.Handlers
{
    public class GetHumorHandler
    {

        private IHumorRepository _repository;

        public GetHumorHandler(IHumorRepository repository)
            => _repository = repository;

        public IEnumerable<HumorEntity> GetAllByUser(string refUser)
        {
            try
            {
                return _repository.GetAllByUser(refUser);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível obter as emoções de hoje. : " + ex.Message);
            }
        }
    }
}