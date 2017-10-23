using System;
using System.Collections.Generic;

namespace StudyNetCore.Repository.Models
{
    public partial class Image
    {
        public Image()
        {
            OrderDetail = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImgPath { get; set; }
        public double? Height { get; set; }
        public double? Width { get; set; }
        public int? ArtistId { get; set; }
        public double? Price { get; set; }

        public Artist Artist { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }
    }
}
