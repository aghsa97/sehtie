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
        public async Task Add(Doctor doctor)
        {
        _dBContext.Doctors.Add(doctor);
        await _dBContext.SaveChangesAsync();
        return;
        }

        public async Task<IEnumerable<Doctor>> GetAllAsync()
        {
            return await _dBContext.Set<Doctor>().ToListAsync();
        }

        public async Task<Doctor> GetByEmail(string email)
        {
            return await _dBContext.Set<Doctor>().FirstOrDefaultAsync(p => p.Email == email);
        }
        
    }
}
