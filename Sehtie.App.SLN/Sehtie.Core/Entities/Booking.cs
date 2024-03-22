//using Microsoft.Identity.Client;

using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Booking : BaseEntity
    {
        public  int No { get; set; }
        public DateTime Date { get; set; }

        public string DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        public string PatientId { get; set; }
        public Patient Patient { get; set; }

        public Booking() 
        {
        }
        public Booking(int no,DateTime date,string doctorId,string patientId) 
        {
            No = no; 
            Date = date;
            DoctorId = doctorId;
            PatientId = patientId; 
        }
    }
}
