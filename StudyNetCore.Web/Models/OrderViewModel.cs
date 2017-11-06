using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyNetCore.Web.Models
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Note { get; set; }
        public int? StatusId { get; set; }
        public string Email { get; set; }
        public IEnumerable<OrderDetailViewModel> Details { get; set; }
    }

    public class OrderDetailViewModel
    {
        public int Id { get; set; }
        public int? OrderId { get; set; }
        public int? ProductId { get; set; }
        public int? Quantity { get; set; }
    }
}
