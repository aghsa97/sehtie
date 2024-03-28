using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Sehtie.Data;
using System.ComponentModel.DataAnnotations;
//using Sehtie.Core.Entities.Identity;
//using Sehtie.Repository.Data;
using System;
using Sehtie.Core.Interfaces;
using Sehtie.Repository.Repository;
//using Sehtie.App.Dtos;

namespace Sehtie.App
{
    public class Program
    {
        public  static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<AppDBContext>(optionsbuilder =>
            {
                optionsbuilder.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });
            // Add cors
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });
            builder.Services.AddScoped(typeof(IDoctorRepository),typeof( DoctorRepository) );
            builder.Services.AddScoped(typeof(IPatientRepository),typeof( PatientRepository) );

            var app = builder.Build();
            using var scope = app.Services.CreateScope();//Services Scoped
            var services = scope.ServiceProvider;   //DI
            //LoggerFacotry
            var LoggerFactory = services.GetRequiredService<ILoggerFactory>();
            try
            {
                var dbContext = services.GetRequiredService<AppDBContext>(); //Ask Clr to Create Object from Store Context Explicitly
                await dbContext.Database.MigrateAsync();//Update-database
            }
            catch (Exception ex)
            {
                var logger = LoggerFactory.CreateLogger<Program>();
                logger.LogError(ex, "an error Occured during apply the Migration");
            }
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.MapControllers();

            app.Run();
        }
    }
}