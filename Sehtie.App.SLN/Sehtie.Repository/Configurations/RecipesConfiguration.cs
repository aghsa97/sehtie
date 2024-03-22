using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Sehtie.Data.Entities
{
    public class RecipesConfiguration : IEntityTypeConfiguration<Recipe>
    {
        public void Configure(EntityTypeBuilder<Recipe> builder)
        {
            builder.ToTable("Recipes");

            builder.HasKey(recipe => recipe.Id);
            builder.Property(recipe => recipe.Id)
                .IsRequired();

            //relastion => Recipe & Doctor 
            builder.HasOne(recipe => recipe.Doctor)
                .WithMany(doctor => doctor.Recipes)
                .HasForeignKey(recipe => recipe.DoctorId);

            
            //relastion => Recipe & Patient 
            builder.HasOne(recipe => recipe.Patient)
                .WithMany(patient => patient.Recipes)
                .HasForeignKey(recipe => recipe.PatientId);

            builder.HasData(loadData());
        }

        private ICollection<Recipe> loadData()
        {
            return new List<Recipe>
            {
                new Recipe("rec01",new DateTime(2024, 2, 5),new DateTime(2024,2,15),"do1","pat1"){ActiveIngredient=false}
            };
        }
    }
}
