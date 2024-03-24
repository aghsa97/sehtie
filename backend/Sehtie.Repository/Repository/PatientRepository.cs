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
        public async Task Add(Patient id)
        => await _dBContext.AddAsync(id);

        public void Delete(Patient id)
        => _dBContext.Remove(id);

        public async Task<IEnumerable<Patient>> GetAllAsync()
        {
            return await _dBContext.Set<Patient>().ToListAsync();
        }

        public async Task<Patient> GetAsync(Patient id)
        {
            return await _dBContext.Set<Patient>().FindAsync(id);
        }

        public void Update(Patient id)
        => _dBContext.Update(id);
        public IQueryable<Patient> SearchByName(string name)
        {
            return  _dBContext.Patients.Where(p=>p.DisplayName.ToLower().Contains(name));
        }
        
    }
}
