using System;
using System.Collections.Generic;

namespace StudyNetCore.Repository.Models
{
    public partial class Class
    {
        public Class()
        {
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Student> Student { get; set; }
    }
}
