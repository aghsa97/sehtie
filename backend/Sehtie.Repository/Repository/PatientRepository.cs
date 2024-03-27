using Sehtie.Core.Interfaces;
using Sehtie.Data;
using Microsoft.EntityFrameworkCore;
using Sehtie.Data.Entities;

namespace Sehtie.Repository.Repository
{
    public class PatientRepository : IPatientRepository
    {
        private readonly AppDBContext _dBContext;

        public PatientRepository(AppDBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public async Task<IEnumerable<Patient>> GetAllAsync()
        {
            return await _dBContext.Set<Patient>().ToListAsync();
        }

        public async Task<Patient> GetByEmail(string email)
        {
            return await _dBContext.Set<Patient>().FirstOrDefaultAsync(p => p.Email == email);
        }
        public async Task Add(Patient patient) 
        {
        _dBContext.Patients.Add(patient);
        await _dBContext.SaveChangesAsync();
        return;
        }
        
    }
}
