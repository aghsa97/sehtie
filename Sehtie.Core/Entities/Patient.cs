using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Patient : Person
    {
        public ICollection<Booking> Bookings { get; set; }

        public ICollection<Recipe> Recipes { get; set; }

        public ICollection<Report> Reports { get; set; }

    }
}
