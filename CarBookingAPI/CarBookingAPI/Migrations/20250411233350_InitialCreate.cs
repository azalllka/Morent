using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CarBookingAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Category = table.Column<int>(type: "integer", nullable: false),
                    Img = table.Column<string>(type: "text", nullable: false),
                    Transmission = table.Column<int>(type: "integer", nullable: false),
                    Spaces = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    DiscountedPrice = table.Column<decimal>(type: "numeric", nullable: true),
                    FuelCapacity = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "Id", "Category", "DiscountedPrice", "FuelCapacity", "Img", "Name", "Price", "Spaces", "Transmission" },
                values: new object[,]
                {
                    { 1, 1, 400m, "100L", "src/assets/img/ferrari/Ferrari Purosangue.png", "Ferrari Purosangue", 390m, 4, 1 },
                    { 2, 0, 435m, "92L", "src/assets/img/ferrari/Ferrari 12Cilindri.png", "Ferrari 12Cilindri", 420m, 2, 1 },
                    { 3, 0, 285m, "78L", "src/assets/img/ferrari/Ferrari F8 Spider.png", "Ferrari F8 Spider", 275m, 2, 1 },
                    { 4, 0, 330m, "65L", "src/assets/img/ferrari/Ferrari 296 GTB.png", "Ferrari 296 GTB", 320m, 2, 1 },
                    { 5, 0, 290m, "78L", "src/assets/img/ferrari/Ferrari F8 Tributo.png", "Ferrari F8 Tributo", 280m, 2, 1 },
                    { 6, 2, 2550m, "120L", "src/assets/img/ferrari/Ferrari F80.png", "Ferrari F80", 2500m, 2, 1 },
                    { 7, 3, 240m, "80L", "src/assets/img/ferrari/Ferrari Portofino M.png", "Ferrari Portofino M", 230m, 2, 1 },
                    { 8, 4, 230m, "80L", "src/assets/img/ferrari/Ferrari Roma.png", "Ferrari Roma", 220m, 2, 1 },
                    { 9, 2, 570m, "68L", "src/assets/img/ferrari/Ferrari SF90 Spider.png", "Ferrari SF90 Spider", 550m, 2, 1 },
                    { 10, 2, 540m, "68L", "src/assets/img/ferrari/Ferrari SF90 Stradale.png", "Ferrari SF90 Stradale", 525m, 2, 1 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
