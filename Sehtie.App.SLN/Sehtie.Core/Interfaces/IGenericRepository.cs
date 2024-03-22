using Sehtie.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sehtie.Core.Interfaces
{
     public interface IGenericRepository<T> where T :BaseEntity 
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetAsync(T id);
        Task Add(T id);
        void Update(T id);
        void Delete(T id);

    }
}
