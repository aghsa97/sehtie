﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Sehtie.Data.Entities;

namespace Sehtie.Data.Config
{
    public class PatientConfiguration : IEntityTypeConfiguration<Patient>
    {
        public void Configure(EntityTypeBuilder<Patient> builder)
        {
            builder.ToTable("Patients");

            builder.HasKey(Patient => Patient.Id);
            builder.Property(Patient => Patient.Id)
                .IsRequired();

            builder.Property(Patient => Patient.DisplayName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(Patient => Patient.PersonalNumber)
                .IsRequired()
                .HasMaxLength(15);

            builder.Property(Patient => Patient.Passowrd)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(Patient => Patient.Email)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(Patient => Patient.PhoneNumber)
                .IsRequired()
                .HasMaxLength(20);

            builder.Property(Patient => Patient.IsDeleted)
                .HasDefaultValue(false);

            //builder.HasData(loadData());
        }

        private ICollection<Patient> loadData()
        {
            return new List<Patient>
            {
                new Patient(),
                new Patient()
            };
        }
    }
}
