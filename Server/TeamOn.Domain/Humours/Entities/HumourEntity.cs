using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamOn.Domain.Contracts;
using TeamOn.Domain.Humours.Enums;

namespace TeamOn.Domain.Humours.Entities
{
    [Table("Humour")]
    public class HumourEntity : Entity
    {
        public HumourEntity(EHumourStatus humourStatus,
                           string refUser,
                           string message,
                           string refCompany)
        {
            Id = Guid.NewGuid().ToString();
            SendDate = DateTime.Now;

            HumourStatus = humourStatus;
            RefUser = refUser;
            Message = message;
            RefCompany = refCompany;
        }

        [Key]
        public string Id { get; private set; }
        public DateTime SendDate { get; private set; }
        public EHumourStatus HumourStatus { get; private set; }
        public string RefUser { get; private set; }
        public string RefCompany { get; private set; }
        public string Message { get; private set; }
    }
}