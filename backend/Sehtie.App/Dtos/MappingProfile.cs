using AutoMapper;
using Sehtie.Core.Entities;
using Sehtie.Data.Entities;

namespace Sehtie.App.Dtos
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            //CreateMap<Doctor, Doctor>().ForMember(p => p.DoctorPatients, o => o.MapFrom(p => p.Doe.Name));
        }
    }
}
