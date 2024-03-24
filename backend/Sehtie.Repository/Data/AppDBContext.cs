using Microsoft.EntityFrameworkCore;
using Sehtie.Data.Entities;
using System.Reflection;

namespace Sehtie.Data
{
    public class AppDBContext:DbContext
    {

        public AppDBContext(DbContextOptions<AppDBContext> contextOptions) : base(contextOptions)
        {

        }
        
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    // DB configuration 
        //    base.OnConfiguring(optionsBuilder);
        //    //var config = new ConfigurationBuilder()
        //    //    .AddJsonFile("appsettings.json")
        //    //    .Build();

        //    //optionsBuilder.UseSqlServer(config.GetSection("constr").Value);

        //}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //// Get configuration entities 
            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(BookingConfiguration).Assembly);
            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(DoctorConfiguration).Assembly);
            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(PatientConfiguration).Assembly);
            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(RecipesConfiguration).Assembly);
            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(ReportConfiguration).Assembly);
            //base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            //modelBuilder.ApplyConfiguration(new BookingConfiguration());
            //modelBuilder.ApplyConfiguration(new DoctorConfiguration());
            //modelBuilder.ApplyConfiguration(new PatientConfiguration());
            //modelBuilder.ApplyConfiguration(new RecipesConfiguration());
            //modelBuilder.ApplyConfiguration(new ReportConfiguration());
        
        }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Report> Reports { get; set; }
        //public DbSet<DoctorPatient> DoctorsPatients { get; set; }

    }
}

