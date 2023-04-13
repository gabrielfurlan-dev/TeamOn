using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamOn.Domain.Contracts;
using TeamOn.Domain.Humours.Entities;
using TeamOn.Domain.Humours.Enums;

namespace TeamOn.Domain.Store.Entities
{
    [Table("Store")]
    public class StoreItem : Entity
    {
        public StoreItem(string name,
                         decimal price,
                         string imageURL,
                         int amount)
        {
            Id = Guid.NewGuid().ToString();
            CreatedAt = DateTime.Now;
            Name = name;
            Price = price;
            ImageURL = imageURL;
            Amount = amount;
        }

        [Key]
        public string Id { get; private set; }
        public string Name { get; private set; }
        public decimal Price { get; private set; }
        public string ImageURL { get; private set; }
        public int Amount { get; private set; }
        public DateTime CreatedAt { get; private set; }
    }

}