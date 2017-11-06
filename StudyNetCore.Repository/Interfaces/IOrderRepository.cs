using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace StudyNetCore.Repository.Interfaces
{
    public interface IOrderRepository
    {
        Task<List<Order>> GetOrder();
        Task<IEnumerable<OrderDetail>> GetOrderDetail(int id);
        Task<bool> UpdateOrder(Order data);
        Task<int> CreateOrder(Order data);
        Task<bool> CreateOrderDetail(OrderDetail data);
    }
}
