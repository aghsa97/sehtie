using Sehtie.Data.Entities;

namespace Sehtie.Core.Interfaces
{
     public interface IPatientRepository
    {
        Task<IEnumerable<Patient>> GetAllAsync();
        Task<Patient> GetByEmail(string email);
        Task Add(Patient patient);

    }
}
