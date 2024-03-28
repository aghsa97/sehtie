using Microsoft.AspNetCore.Mvc;
using Sehtie.Core.Interfaces;
using Sehtie.Data.Entities;

namespace Sehtie.App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorRepository _doctorRepository;

        public DoctorsController(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetAllDoctors()
        {
            
            var getAllDocs = await _doctorRepository.GetAllAsync();
            if (getAllDocs == null)
                return NotFound();

            return Ok(getAllDocs);   
        }

        [HttpGet("{email}")]
        public async Task<ActionResult<Doctor>> GetDoctorByEmail(string email)
        {
            
            if (email == null)
                return NotFound();

            var doctor = await _doctorRepository.GetByEmail(email);

            if (doctor == null)
                return NotFound();

            return Ok(doctor);
        }

        [HttpPost]
        public async Task<ActionResult<Doctor>> AddDoctor(Doctor doctor)
        {
            if (doctor == null)
                return BadRequest("Invalid doctor data. Please provide a valid doctor object.");

            await _doctorRepository.Add(doctor);
            return Ok();
        }
    }
}
