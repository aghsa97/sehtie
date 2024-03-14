using Microsoft.EntityFrameworkCore;
using Sehtie.Data.Entities;

namespace Sehtie.Data
{
    public class AppDBContext:DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Report> Reports { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // DB configuration 
            base.OnConfiguring(optionsBuilder);
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder.UseSqlServer(config.GetSection("constr").Value);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Get configuration entities 
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(BookingConfiguration).Assembly);
            base.OnModelCreating(modelBuilder);
        }
    }
}
