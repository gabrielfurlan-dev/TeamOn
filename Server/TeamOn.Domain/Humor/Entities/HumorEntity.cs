using TeamOn.Domain.Contracts;
using TeamOn.Domain.Humor.Enums;

namespace TeamOn.Domain.Humor.Entities
{
    public class HumorEntity : Entity
    {
        public HumorEntity(EHumorStatus humorStatus)
        {
            HumorStatus = humorStatus;
        }

        public EHumorStatus HumorStatus { get; private set; }
    }
}