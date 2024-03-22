using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sehtie.Repository.Data.Migrations
{
    public partial class AddingBaseEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "do1");

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "do2");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Reports",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Bookings",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DoctorsPatients",
                columns: table => new
                {
                    DoctorId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PatientId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorsPatients", x => new { x.DoctorId, x.PatientId });
                    table.ForeignKey(
                        name: "FK_DoctorsPatients_Doctors_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "Doctors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DoctorsPatients_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "Category", "DisplayName", "Email", "PersonalNumber", "PhoneNumber" },
                values: new object[] { "172ebd55-0a9f-4c02-a8a8-11a757f83bd7", "ophthalmologist", "do1Ahmed", "do1Ahmed@gmail.com", "N129841239", "963931243567" });

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "Category", "DisplayName", "Email", "PersonalNumber", "PhoneNumber" },
                values: new object[] { "ca6a6e70-44c1-4ca5-9496-8a91e8f8a439", "cardiologist", "do2Abdulrahman", "do2Abdulrahman@gmail.com", "N129841238", "963923678945" });

            migrationBuilder.CreateIndex(
                name: "IX_DoctorsPatients_PatientId",
                table: "DoctorsPatients",
                column: "PatientId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorsPatients");

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "172ebd55-0a9f-4c02-a8a8-11a757f83bd7");

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "ca6a6e70-44c1-4ca5-9496-8a91e8f8a439");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Bookings");

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "Category", "DisplayName", "Email", "IsDeleted", "PersonalNumber", "PhoneNumber" },
                values: new object[] { "do1", "ophthalmologist", "do1Ahmed", "do1Ahmed@gmail.com", false, "N129841239", "963931243567" });

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "Category", "DisplayName", "Email", "IsDeleted", "PersonalNumber", "PhoneNumber" },
                values: new object[] { "do2", "cardiologist", "do2Abdulrahman", "do2Abdulrahman@gmail.com", false, "N129841238", "963923678945" });
        }
    }
}
