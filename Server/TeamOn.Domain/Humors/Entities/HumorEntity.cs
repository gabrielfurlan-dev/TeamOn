using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamOn.Domain.Contracts;
using TeamOn.Domain.Humors.Enums;

namespace TeamOn.Domain.Humors.Entities
{
    [Table("Humor")]
    public class HumorEntity : Entity
    {
        public HumorEntity(EHumorStatus humorStatus,
                           string refUser,
                           string message)
        {
            Id = Guid.NewGuid().ToString();
            SendDate = DateTime.Now;

            HumorStatus = humorStatus;
            RefUser = refUser;
            Message = message;
        }

        [Key]
        public string Id { get; private set; }
        public DateTime SendDate { get; private set; }
        public EHumorStatus HumorStatus { get; private set; }
        public string RefUser { get; private set; }
        public string Message { get; private set; }
    }
}