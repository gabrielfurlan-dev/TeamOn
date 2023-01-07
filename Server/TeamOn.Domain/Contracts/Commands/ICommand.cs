using Flunt.Notifications;

namespace TeamOn.Domain.Contracts.Commands
{
    public abstract class ICommandContract : Notifiable<Notification>
    {
         public abstract bool Validate();
    }
}