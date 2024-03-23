using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sehtie.Data.Entities;

namespace Sehtie.Data.Config
{
    public class ReportConfiguration : IEntityTypeConfiguration<Report>
    {
        public void Configure(EntityTypeBuilder<Report> builder)
        {
            builder.ToTable("Reports");

            builder.HasKey(report => report.Id);
            builder.Property(report => report.Id)
                .IsRequired();

            builder.Property(report => report.DoctorId)
                .IsRequired();

            builder.Property(report => report.PatientId)
                .IsRequired();

            builder.HasOne(report => report.Doctor)
                .WithMany(doctor => doctor.Reports)
                .HasForeignKey(report => report.DoctorId);

            builder.HasOne(report => report.Patient)
                .WithMany(patient => patient.Reports)
                .HasForeignKey(report => report.PatientId);

            //builder.HasData(LoadData());
        }

        private ICollection<Report> LoadData()
        {
            return new List<Report>
            {
                new Report()
            };
        }
    }
}
