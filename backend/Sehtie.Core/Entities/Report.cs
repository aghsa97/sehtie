using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Report : BaseEntity
    {
        public string Diagnosis { get; set; }
        public DateTime Date { get; set; }

        public string? DoctorId { get; set; }
        public Doctor? Doctor { get; set; }

        public string? PatientId { get; set; }
        public Patient? Patient { get; set; }

    }
}
