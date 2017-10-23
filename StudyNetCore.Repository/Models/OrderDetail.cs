using System;
using System.Collections.Generic;

namespace StudyNetCore.Repository.Models
{
    public partial class OrderDetail
    {
        public int Id { get; set; }
        public int? OrderId { get; set; }
        public int? ProductId { get; set; }
        public int? Quantity { get; set; }

        public Order Order { get; set; }
        public Image Product { get; set; }
    }
}
