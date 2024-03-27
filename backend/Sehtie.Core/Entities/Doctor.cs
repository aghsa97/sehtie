using Microsoft.EntityFrameworkCore.ValueGeneration;
using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Doctor:Person
    {
        public string Category { get; set; }

        public ICollection<Booking>? Bookings { get; set; }

        public ICollection<Recipe>? Recipes { get; set; }

        public ICollection<Report>? Reports { get; set; }

        public ICollection<Patient>? patients { get; set; }


    }
}
