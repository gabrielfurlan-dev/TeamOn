using TeamOn.Domain.Store.Entities;
using TeamOn.Domain.Store.Repositories;

namespace TeamOn.Domain.Store.Comands
{
    public class GetItensHandler
    {
        private IStoreRepository _respository;

        public GetItensHandler(IStoreRepository respository)
        {
            _respository = respository;
        }

        public IEnumerable<StoreItem> GetItems()
        {
            try
            {
                return _respository.GetItems();
            }
            catch(Exception ex)
            {
                throw new Exception("Não foi possível obter os dados dos produtos" + ex.Message);
            }
        }

    }
}
