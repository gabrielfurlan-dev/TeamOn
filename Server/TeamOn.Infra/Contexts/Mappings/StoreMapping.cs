using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PgsqlDataTypes;
using TeamOn.Domain.Store.Entities;

namespace TeamOn.Infra.Contexts.Mappings
{
    public class StoreMapping : IEntityTypeConfiguration<StoreEntity> {

        public void Configure(EntityTypeBuilder<StoreEntity> builder)
        {
            builder.ToTable("Store");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                    .ValueGeneratedOnAdd()
                    .UseIdentityColumn();

            builder.Property(x => x.ImgURL)
                    .IsRequired()
                    .HasColumnName("ImgURL")
                    .HasColumnType(EPgsqlDataTypes.Varchar.ToString());

            builder.Property(x => x.ProductName)
                    .IsRequired()
                    .HasColumnName("ProductName")
                    .HasColumnType(EPgsqlDataTypes.Varchar.ToString())
                    .HasMaxLength(80);

            builder.Property(x => x.Price)
                   .IsRequired()
                   .HasColumnName("Price")
                   .HasColumnType(EPgsqlDataTypes.Decimal.ToString());


            builder.Property(x => x.SendDate)
                    .IsRequired()
                    .HasColumnName("SendDate")
                    .HasColumnType(EPgsqlDataTypes.Date.ToString());

            builder.HasIndex(x => x.Id)
                   .IsUnique();
        }
    }

}
