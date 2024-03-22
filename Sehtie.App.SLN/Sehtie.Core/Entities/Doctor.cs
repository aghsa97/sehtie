using Microsoft.EntityFrameworkCore.ValueGeneration;
using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Doctor:Person
    {
        public string Category { get; set; }

        public ICollection<Booking> Bookings { get; set; }

        public ICollection<Recipe> Recipes { get; set; }

        public ICollection<Report> Reports { get; set; }

        public ICollection<DoctorPatient> DoctorPatients { get; set; }
        public Doctor() { }
        public Doctor(string id,string personalNumber,string displayName,string email,string phoneNumber,string category)
            :base(id, personalNumber, displayName, email, phoneNumber) 
        { Category = category;

        }

    }
}
