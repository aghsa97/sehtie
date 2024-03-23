using Microsoft.AspNetCore.Mvc;
using Sehtie.Core.Interfaces;
using Sehtie.Data;
using Sehtie.Data.Entities;

namespace Sehtie.App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoctorsController : ControllerBase
    {
        private readonly AppDBContext _dBContext;
        private readonly IDoctorRepository _doctorRepository;
        private readonly IPatientRepository _patientRepository;

        public DoctorsController(AppDBContext dBContext,IDoctorRepository doctorRepository,IPatientRepository patientRepository)
        {
            _dBContext = dBContext;
            _doctorRepository = doctorRepository;
            _patientRepository = patientRepository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetAllPatients()
        {
            
                var getAllPats = await _patientRepository.GetAllAsync();
            if (getAllPats == null)
                return NotFound();

                return Ok(getAllPats);   
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatsById(Patient id)
        {
            if(id == null )
                return NotFound();
            var getpats = await _patientRepository.GetAsync(id);
            return Ok(getpats);
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<Patient>> GetPatsById(string name)
        {
            if (name == null)
                return NotFound();

            var pats = Enumerable.Empty<Patient>();
            if (string.IsNullOrEmpty(name))
            {
                pats = await _patientRepository.GetAllAsync();
            }
            else
            {
                pats = _patientRepository.SearchByName(name.ToLower());
            }

            return Ok(pats);
        }

    }
}
