using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PgsqlDataTypes;
using TeamOn.Domain.Users.Enitities;

namespace TeamOn.Infra.Contexts.Mappings
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                   .HasDefaultValueSql("NEWID()");

            builder.Property(x => x.Name)
                    .IsRequired()
                    .HasColumnName("Name")
                    .HasColumnType(EPgsqlDataTypes.Varchar.ToString())
                    .HasMaxLength(20);

            builder.Property(x => x.Occupation)
                   .IsRequired()
                   .HasColumnName("Occupation")
                   .HasColumnType(EPgsqlDataTypes.Varchar.ToString())
                   .HasMaxLength(20);

            builder.Property(x => x.Biography)
                   .IsRequired()
                   .HasColumnName("Biography")
                   .HasColumnType(EPgsqlDataTypes.Varchar.ToString())
                   .HasMaxLength(150);

            builder.Property(x => x.Email)
                   .IsRequired()
                   .HasColumnName("Email")
                   .HasColumnType(EPgsqlDataTypes.Varchar.ToString())
                   .HasMaxLength(50);

            builder
           .Property(u => u.Skills)
           .HasConversion(
               v => string.Join(',', v),
               v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()
           );
        }
    }
}