using Sehtie.Data.Entities;

namespace Sehtie.Core.Interfaces
{
     public interface IDoctorRepository 
    {
        Task<IEnumerable<Doctor>> GetAllAsync();
        Task<Doctor> GetByEmail(string email);
        Task Add(Doctor doctor);

    }
}
