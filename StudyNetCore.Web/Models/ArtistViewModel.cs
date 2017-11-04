using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyNetCore.Web.Models
{
    public class ArtistViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IEnumerable<ImageViewModel> Images { get; set; }
    }
}
