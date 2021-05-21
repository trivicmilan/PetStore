using Microsoft.EntityFrameworkCore.Migrations;

namespace PetStore.Migrations
{
    public partial class M5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Adrress",
                table: "Order",
                newName: "Address");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Order",
                newName: "Adrress");
        }
    }
}
