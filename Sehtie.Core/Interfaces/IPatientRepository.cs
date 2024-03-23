using Sehtie.Core.Entities;
using Sehtie.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sehtie.Core.Interfaces
{
     public interface IPatientRepository
    {
        Task<IEnumerable<Patient>> GetAllAsync();
        Task<Patient> GetAsync(Patient id);
        Task Add(Patient id);
        void Update(Patient id);
        void Delete(Patient id);
        IQueryable<Patient> SearchByName(string name);

    }
}
