using Sehtie.Core.Entities;

namespace Sehtie.Data.Entities
{
    public class Person :BaseEntity
    {
        public string PersonalNumber { get; set; }
        public string Passowrd { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}
