using Microsoft.AspNetCore.Mvc;
using Sehtie.Core.Interfaces;
using Sehtie.Data.Entities;

namespace Sehtie.App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PatientsController : ControllerBase
    {
        private readonly IPatientRepository _patientRepository;

        public PatientsController(IPatientRepository patientRepository)
        {
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

        [HttpGet("{email}")]
        public async Task<ActionResult<Patient>> GetPatsByEmail(string email)
        {
            
            if (email == null)
                return NotFound();

            var pats = await _patientRepository.GetByEmail(email);

            if (pats == null)
                return NotFound();

            return Ok(pats);
        }

        [HttpPost]
        public async Task<ActionResult<Patient>> AddPatient(Patient patient)
        {
            if (patient == null)
                return BadRequest("Invalid patient data. Please provide a valid patient object.");

            await _patientRepository.Add(patient);
            return Ok();
        }

    }
}
