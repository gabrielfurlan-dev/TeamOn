using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeamOn.Domain.Infra.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Humour",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    HumourStatus = table.Column<int>(type: "integer", nullable: false),
                    RefUser = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Humour", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Humour");
        }
    }
}
