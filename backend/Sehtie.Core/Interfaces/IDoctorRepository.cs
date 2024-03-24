using Sehtie.Core.Entities;
using Sehtie.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sehtie.Core.Interfaces
{
     public interface IDoctorRepository 
    {
        Task<IEnumerable<Doctor>> GetAllAsync();
        Task<Doctor> GetAsync(Doctor id);
        Task Add(Doctor id);
        void Update(Doctor id);
        void Delete(Doctor id);

    }
}
