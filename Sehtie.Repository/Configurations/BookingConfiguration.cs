using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Sehtie.Data.Entities
{
    public class BookingConfiguration : IEntityTypeConfiguration<Booking>
    {
        public void Configure(EntityTypeBuilder<Booking> builder)
        {
            builder.ToTable("Bookings");

            builder.HasKey(booking =>booking.Id);
            builder.Property(booking => booking.Id)
                .IsRequired();

            builder.Property(booking => booking.Date)
                .IsRequired();

            //relation => Booking & Doctor
            builder.HasOne(booking => booking.Doctor)
                .WithMany(doctor => doctor.Bookings)
                .HasForeignKey(booking =>booking.DoctorId);

            //relation => Booking & Patient
            builder.HasOne(booking => booking.Patient)
                .WithMany(pationt => pationt.Bookings)
                .HasForeignKey(booking =>booking.PatientId);

           // builder.HasData(LoadData());
        }

        private ICollection<Booking> LoadData()
        {
            return new List<Booking>
                {
                    new Booking(),
                    new Booking(),
                    new Booking()
                };
        }
    }
}
