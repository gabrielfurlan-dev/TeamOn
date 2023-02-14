using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PgsqlDataTypes;
using TeamOn.Domain.Humours.Entities;

namespace TeamOn.Domain.Infra.Contexts.Mappings
{
    public class HumourMapping : IEntityTypeConfiguration<HumourEntity>
    {
        public void Configure(EntityTypeBuilder<HumourEntity> builder)
        {
            builder.ToTable("Humour");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                    .ValueGeneratedOnAdd()
                    .UseIdentityColumn();

            builder.Property(x => x.HumourStatus)
                    .IsRequired()
                    .HasColumnName("HumourStatus")
                    .HasColumnType(EPgsqlDataTypes.BigInt.ToString())
                    .HasMaxLength(1);

            builder.Property(x => x.RefUser)
                    .IsRequired()
                    .HasColumnName("RefUser")
                    .HasColumnType(EPgsqlDataTypes.Varchar.ToString())
                    .HasMaxLength(80);

            builder.Property(x => x.SendDate)
                    .IsRequired()
                    .HasColumnName("SendDate")
                    .HasColumnType(EPgsqlDataTypes.Date.ToString());

            builder.HasIndex(x => x.Id)
                   .IsUnique();
        }
    }
}