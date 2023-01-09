using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamOn.Domain.Contracts;
using TeamOn.Domain.Humor.Enums;

namespace TeamOn.Domain.Humor.Entities
{
    [Table("Humor")]
    public class HumorEntity : Entity
    {
        public HumorEntity(EHumorStatus humorStatus)
        {
            Id = Guid.NewGuid().ToString();
            HumorStatus = humorStatus;
        }

        [Key]
        public string Id { get; private set; }
        public EHumorStatus HumorStatus { get; private set; }
    }
}