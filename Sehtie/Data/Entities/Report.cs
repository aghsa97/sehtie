using Microsoft.EntityFrameworkCore.Metadata;

namespace Sehtie.Data.Entities
{
    public class Report
    {
        public int No { get; set; }
        public string Diagnosis { get; set; }
        public DateTime Date { get; set; }

        public string DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        public string PatientId { get; set; }
        public Patient Patient { get; set; }

        public Report() { } 
        public Report(int no, string diagnosis, string doctorId, string patientId, DateTime date)
        {
            Diagnosis = diagnosis;DoctorId = doctorId;
            PatientId = patientId;Date = date;
            No = no;
        }
    }
}
