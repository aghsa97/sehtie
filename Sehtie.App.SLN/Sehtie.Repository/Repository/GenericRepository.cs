using Sehtie.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sehtie.Core.Interfaces;
using Sehtie.Core.Entities;
using Sehtie.Data;
using Microsoft.EntityFrameworkCore;

namespace Sehtie.Repository.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly AppDBContext _dBContext;

        public GenericRepository(AppDBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public async Task Add(T id)
        => await _dBContext.AddAsync(id);

        public void Delete(T id)
        => _dBContext.Remove(id);

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dBContext.Set<T>().ToListAsync();
        }

        public async Task<T> GetAsync(T id)
        {
            return await _dBContext.Set<T>().FindAsync(id);
        }

        public void Update(T id)
        => _dBContext.Update(id);
        
    }
}
