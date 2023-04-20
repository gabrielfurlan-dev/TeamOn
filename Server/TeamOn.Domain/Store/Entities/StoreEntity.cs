using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamOn.Domain.Contracts;

namespace TeamOn.Domain.Store.Entities
{
    [Table("Store")]
    public class StoreEntity : Entity
    {
        public StoreEntity(string imgURL, string productName, decimal price)
        {
            Id = Guid.NewGuid().ToString();
            ImgURL = imgURL;
            ProductName = productName;
            Price = price;
            SendDate = DateTime.Now;

        }

        [Key]
        public string Id { get; private set; }
        public string ImgURL { get; private set; }
        public string ProductName { get; private set; }
        public decimal Price { get; private set; }
        public DateTime SendDate { get; private set; }
    }

}

