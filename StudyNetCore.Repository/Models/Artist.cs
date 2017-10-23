using System;
using System.Collections.Generic;

namespace StudyNetCore.Repository.Models
{
    public partial class Artist
    {
        public Artist()
        {
            Image = new HashSet<Image>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Image> Image { get; set; }
    }
}
