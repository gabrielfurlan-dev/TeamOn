using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamOn.Domain.Contracts;
using TeamOn.Domain.Humor.Enums;

namespace TeamOn.Domain.Humor.Entities
{
    [Table("Humor")]
    public class HumorEntity : Entity
    {
        public HumorEntity(EHumorStatus humorStatus, string refUser)
        {
            Id = Guid.NewGuid().ToString();
            SendDate = DateTime.Now;

            HumorStatus = humorStatus;
            RefUser = refUser;
        }

        [Key]
        public string Id { get; private set; }
        public DateTime SendDate { get; private set; }
        public EHumorStatus HumorStatus { get; private set; }
        public string RefUser { get; set; }
    }
}