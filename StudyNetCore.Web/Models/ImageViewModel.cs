using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudyNetCore.Web.Models
{
    public class ImageViewModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string ArtistName { get; set; }
        [Required]
        public int ArtistId { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string ImgPath { get; set; }
        [Required]
        public double Height { get; set; }
        [Required]
        public double Width { get; set; }
        [Required]
        public double Price { get; set; }
    }
}
