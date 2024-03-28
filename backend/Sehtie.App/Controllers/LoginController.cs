using Microsoft.AspNetCore.Mvc;
using Sehtie.Core.Interfaces;
using Sehtie.Data.Entities;

namespace Sehtie.App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly IPatientRepository _patientRepository;

        public LoginController(IDoctorRepository doctorRepository, IPatientRepository patientRepository)
        {
            _doctorRepository = doctorRepository;
            _patientRepository = patientRepository;
        }
        
        [HttpGet("{email}")]
        public async Task<ActionResult<Person>> GetUserByEmail(string email)
        {
            if (email == null)
                return BadRequest("Invalid email. Please provide a valid email.");

            var doctor = await _doctorRepository.GetByEmail(email);
            if (doctor != null)
                return Ok(doctor);

            var patient = await _patientRepository.GetByEmail(email);
            if (patient != null)
                return Ok(patient);

            return BadRequest("User not found.");
        }
    }
}
