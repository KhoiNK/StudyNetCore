using System;
using System.Collections.Generic;

namespace StudyNetCore.Repository.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetail = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Note { get; set; }
        public int? StatusId { get; set; }
        public string Email { get; set; }

        public OrderStatus Status { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }
    }
}
