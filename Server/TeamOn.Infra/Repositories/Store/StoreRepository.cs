using TeamOn.Domain.Store.Entities;
using TeamOn.Domain.Store.Repositories;

namespace TeamOn.Infra.Repositories.Store
{
    public class StoreRepository : IStoreRepository
    {
        public List<StoreEntity> GetItems()
        {

            var storeItems = new List<StoreEntity>();

            storeItems.Add(new StoreEntity(imgURL: "https://i.pinimg.com/564x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", productName: "Camisa TeaOn", price: 100));
            storeItems.Add(new StoreEntity(imgURL: "https://i.pinimg.com/564x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", productName: "Camisa TeaOn", price: 100));
            storeItems.Add(new StoreEntity(imgURL: "https://i.pinimg.com/564x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", productName: "Camisa TeaOn", price: 100));
            storeItems.Add(new StoreEntity(imgURL: "https://i.pinimg.com/564x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", productName: "Camisa TeaOn", price: 100));
            storeItems.Add(new StoreEntity(imgURL: "https://i.pinimg.com/564x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", productName: "Camisa TeaOn", price: 100));
            storeItems.Add(new StoreEntity(imgURL: "https://i.pinimg.com/564x/df/ca/ec/dfcaec53b133ca3541d8d0c341ba9924.jpg", productName: "Camisa TeaOn", price: 100));
        
            
            return storeItems;


        }
    }
}


