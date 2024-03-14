namespace Sehtie.Data.Entities
{
    public class Recipe
    {
        public string Id { get; set; }
        public DateTime DateOfIssue { get; set; }
        public DateTime AppliesTo { get; set; }
        public bool ActiveIngredient { get; set; } =true;

        public string DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        public string PatientId { get; set; } 
        public Patient Patient { get; set; }

        public Recipe(){}
        public Recipe(string id,DateTime dateOfIssue,DateTime appliesTo,string doctorId,string patientId)
        {
            Id=id; DateOfIssue=dateOfIssue;
            AppliesTo = appliesTo;
            DoctorId = doctorId; PatientId = patientId;
        }
    }
}
