//using Microsoft.Identity.Client;

using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Booking : BaseEntity
    {
        public int No { get; set; }
        public DateTime Date { get; set; }
        public BookingStatus Status { get; set; }

        public string DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        public string PatientId { get; set; }
        public Patient Patient { get; set; }

    }
}
