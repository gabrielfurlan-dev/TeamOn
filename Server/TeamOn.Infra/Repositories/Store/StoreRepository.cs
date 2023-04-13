using TeamOn.Domain.Store.Entities;
using TeamOn.Domain.Store.Repositories;
using TeamOn.Infra.Contexts;

namespace TeamOn.Infra.Repositories.Store
{
    public class StoreRepository : IStoreRepository
    {
        //private StoreContext _dataContext;

        public IEnumerable<StoreItem> GetItems()
        {
            //return _dataContext.Store.ToList();
            var storeItems = new List<StoreItem>();

            storeItems.Add(new StoreItem(name: "Camisa TeamOn", price: 100, imageURL: "https://i.pinimg.com/236x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", amount: 12));
            storeItems.Add(new StoreItem(name: "Garrafa TeamOn", price: 80, imageURL: "https://i.pinimg.com/236x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", amount: 12));
            storeItems.Add(new StoreItem(name: "Caneca TeamOn", price: 10, imageURL: "https://i.pinimg.com/236x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", amount: 12));
            storeItems.Add(new StoreItem(name: "Agenda TeamOn", price: 5, imageURL: "https://i.pinimg.com/236x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", amount: 12));
            storeItems.Add(new StoreItem(name: "Mousepad TeamOn", price: 80, imageURL: "https://i.pinimg.com/236x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", amount: 12));
            storeItems.Add(new StoreItem(name: "Camisa TeamOn", price: 80, imageURL: "https://i.pinimg.com/236x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", amount: 12));


            return storeItems;
        }
    }
}
