using System;
using System.Collections.Generic;

namespace StudyNetCore.Repository.Models
{
    public partial class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ClassId { get; set; }

        public Class Class { get; set; }
    }
}
