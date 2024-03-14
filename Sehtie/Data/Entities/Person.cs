namespace Sehtie.Data.Entities
{
    public class Person 
    { 
        public  string Id { get; set; }
        public  string PersonalNumber { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsDeleted { get; set; } = false;

        public Person() { }
        public Person(string id, string personalNumber, string displayName, string email, string phoneNumber)
        {
            Id = id;PersonalNumber = personalNumber;DisplayName = displayName;
            Email = email; PhoneNumber = phoneNumber;
        }
    }
}
