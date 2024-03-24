using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sehtie.Data.Entities;

namespace Sehtie.Data.Config
{
    public class DoctorConfiguration : IEntityTypeConfiguration<Doctor>
    {
        public void Configure(EntityTypeBuilder<Doctor> builder)
        {
            builder.ToTable("Doctors");

            builder.HasKey(doctor => doctor.Id);
            builder.Property(doctor => doctor.Id)
                .IsRequired();

            builder.Property(doctor => doctor.DisplayName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(doctor => doctor.PersonalNumber)
                .IsRequired()
                .HasMaxLength(15);

            builder.Property(doctor => doctor.Passowrd)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(doctor => doctor.Email)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(doctor => doctor.PhoneNumber)
                .IsRequired()
                .HasMaxLength(20);

            builder.Property(doctor => doctor.IsDeleted)
                .HasDefaultValue(false);

            //builder.HasData(loadData());
        }

        private ICollection<Doctor> loadData()
        {
            return new List<Doctor>
            {
                new Doctor(),
                new Doctor()
            };
        }
    }
}
