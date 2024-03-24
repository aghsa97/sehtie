using Sehtie.Core.Interfaces;
using Sehtie.Data;
using Microsoft.EntityFrameworkCore;
using Sehtie.Data.Entities;

namespace Sehtie.Repository.Repository
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly AppDBContext _dBContext;

        public DoctorRepository(AppDBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public async Task Add(Doctor id)
        => await _dBContext.AddAsync(id);

        public void Delete(Doctor id)
        => _dBContext.Remove(id);

        public async Task<IEnumerable<Doctor>> GetAllAsync()
        {
            return await _dBContext.Set<Doctor>().ToListAsync();
        }

        public async Task<Doctor> GetAsync(Doctor id)
        {
            return await _dBContext.Set<Doctor>().FindAsync(id);
        }

        public void Update(Doctor id)
        => _dBContext.Update(id);
        
    }
}
