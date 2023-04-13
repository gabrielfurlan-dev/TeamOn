using TeamOn.Domain.Store.Entities;

namespace TeamOn.Domain.Store.Repositories
{
    public interface IStoreRepository
    {
        IEnumerable<StoreItem> GetItems();
    }
}
