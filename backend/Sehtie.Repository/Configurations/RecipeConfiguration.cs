using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Sehtie.Data.Entities
{
    public class RecipeConfiguration : IEntityTypeConfiguration<Recipe>
    {
        public void Configure(EntityTypeBuilder<Recipe> builder)
        {
            builder.ToTable("Recipes");

            builder.HasKey(recipe => recipe.Id);
            builder.Property(recipe => recipe.Id)
                .IsRequired();

            builder.Property(recipe => recipe.Description)
                .HasMaxLength(250);

            //relations => Recipe & Doctor 
            builder.HasOne(recipe => recipe.Doctor)
                .WithMany(doctor => doctor.Recipes)
                .HasForeignKey(recipe => recipe.DoctorId);

            
            //relations => Recipe & Patient 
            builder.HasOne(recipe => recipe.Patient)
                .WithMany(patient => patient.Recipes)
                .HasForeignKey(recipe => recipe.PatientId);

           // builder.HasData(loadData());
        }

        private ICollection<Recipe> loadData()
        {
            return new List<Recipe>
            {
                new Recipe()
            };
        }
    }
}
