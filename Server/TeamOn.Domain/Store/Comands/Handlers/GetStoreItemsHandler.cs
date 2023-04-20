using TeamOn.Domain.Store.Entities;
using TeamOn.Domain.Store.Repositories;

namespace TeamOn.Domain.Store.Comands.Handlers
{
    public class GetStoreItemsHandler
    {
        private IStoreRepository _repository;

        public GetStoreItemsHandler(IStoreRepository repository)
            => _repository = repository;

        public List<StoreEntity> GetItems()
        {
            try
            {
                return _repository.GetItems();
            }
            catch(Exception ex)
            {
                throw new Exception("Não foi possível obter os items da loja. Erro: " + ex.Message);
            }
        }
    }
}

